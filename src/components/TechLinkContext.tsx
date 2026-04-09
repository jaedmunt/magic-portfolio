'use client';

import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface TechLinkContextType {
    activeId: string | null;
    register: (id: string) => void;
    unregister: (id: string) => void;
    onManualHover: (id: string | null) => void;
}

const TechLinkContext = createContext<TechLinkContextType | null>(null);

const SHOW_DURATION = 900;   // ms each card stays visible
const CYCLE_INTERVAL = 1600; // ms between each card appearing

export function TechLinkProvider({ children }: { children: React.ReactNode }) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const ids = useRef<string[]>([]);
    const indexRef = useRef(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const manualHover = useRef(false);

    const clearTimers = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    };

    const showNext = useCallback(() => {
        if (manualHover.current || ids.current.length === 0) return;
        indexRef.current = (indexRef.current + 1) % ids.current.length;
        const next = ids.current[indexRef.current];
        setActiveId(next);
        showTimeoutRef.current = setTimeout(() => {
            if (!manualHover.current) setActiveId(null);
        }, SHOW_DURATION);
    }, []);

    const startCycle = useCallback(() => {
        clearTimers();
        intervalRef.current = setInterval(showNext, CYCLE_INTERVAL);
    }, [showNext]);

    useEffect(() => {
        // Kick off after a short initial delay
        const init = setTimeout(startCycle, 1800);
        return () => {
            clearTimeout(init);
            clearTimers();
        };
    }, [startCycle]);

    const register = useCallback((id: string) => {
        if (!ids.current.includes(id)) ids.current.push(id);
    }, []);

    const unregister = useCallback((id: string) => {
        ids.current = ids.current.filter(i => i !== id);
    }, []);

    const onManualHover = useCallback((id: string | null) => {
        manualHover.current = id !== null;
        if (id !== null) {
            // Pause auto-cycle while user is hovering
            clearTimers();
            setActiveId(id);
        } else {
            // Resume cycle from current position after a beat
            setActiveId(null);
            setTimeout(startCycle, 600);
        }
    }, [startCycle]);

    return (
        <TechLinkContext.Provider value={{ activeId, register, unregister, onManualHover }}>
            {children}
        </TechLinkContext.Provider>
    );
}

export function useTechLinkContext() {
    return useContext(TechLinkContext);
}
