'use client';

import { useEffect, useId, useState } from 'react';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react-dom';
import Link from 'next/link';
import { InlineCode } from '@/once-ui/components';
import { useTechLinkContext } from '@/components/TechLinkContext';

interface TechLinkProps {
    href: string;
    children: React.ReactNode;
    dim?: boolean;
}

const GOLD = '#ffd700';
const GOLD_GLOW = '0 0 6px rgba(255, 215, 0, 1), 0 0 14px rgba(255, 215, 0, 0.85), 0 0 30px rgba(255, 185, 0, 0.6), 0 0 50px rgba(255, 165, 0, 0.3)';

function useViewportOffset() {
    const [vOffset, setVOffset] = useState(60);
    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w < 640) setVOffset(6);
            else if (w < 1024) setVOffset(8);
            else if (w < 1600) setVOffset(10);
            else setVOffset(12);
        };
        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);
    return vOffset;
}

export function TechLink({ href, children, dim = false }: TechLinkProps) {
    const id = useId();
    const ctx = useTechLinkContext();
    const isActive = ctx?.activeId === id;
    const vOffset = useViewportOffset();

    const { refs, floatingStyles } = useFloating({
        placement: 'top',
        strategy: 'fixed',
        middleware: [offset(vOffset), flip(), shift({ padding: 12 })],
        whileElementsMounted: autoUpdate,
    });

    useEffect(() => {
        ctx?.register(id);
        return () => ctx?.unregister(id);
    }, [id, ctx]);

    let domain = '';
    try {
        domain = new URL(href).hostname.replace('www.', '');
    } catch {}

    return (
        <span style={{ display: 'inline-block' }}>
            <span
                ref={refs.setReference}
                onMouseEnter={() => ctx?.onManualHover(id)}
                onMouseLeave={() => ctx?.onManualHover(null)}
                style={{ display: 'inline-block' }}
            >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    <InlineCode style={{
                        color: isActive ? GOLD : (dim ? '#666' : '#999'),
                        textShadow: isActive ? GOLD_GLOW : 'none',
                        transition: 'color 0.2s ease, text-shadow 0.2s ease',
                    }}>
                        {children}
                    </InlineCode>
                </Link>
            </span>

            <div
                ref={refs.setFloating}
                style={{
                    ...floatingStyles,
                    zIndex: 200,
                    background: 'var(--neutral-background-strong, #1a1a1a)',
                    border: '1px solid var(--neutral-border-medium, #333)',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
                    opacity: isActive ? 1 : 0,
                    transform: `${floatingStyles.transform ?? ''} translateY(${isActive ? 0 : 6}px)`,
                    transition: 'opacity 0.18s ease, transform 0.18s ease',
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                    width={14}
                    height={14}
                    alt=""
                    style={{ borderRadius: '3px', opacity: 0.85 }}
                />
                <span style={{
                    fontSize: '11px',
                    color: 'var(--neutral-on-background-weak, #888)',
                    letterSpacing: '0.01em',
                }}>
                    {domain}
                </span>
            </div>
        </span>
    );
}
