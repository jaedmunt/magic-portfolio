"use client";

import React from 'react';
import { Flex, Heading, Text, Button } from '@/once-ui/components';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    ErrorBoundaryState
> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Flex
                    fillWidth
                    paddingY="l"
                    paddingX="l"
                    direction="column"
                    gap="m"
                    alignItems="center">
                    <Heading variant="heading-strong-l">
                        Something went wrong
                    </Heading>
                    <Text variant="body-default-m">
                        {this.state.error?.message || 'An unexpected error occurred'}
                    </Text>
                    <Button
                        onClick={() => {
                            this.setState({ hasError: false, error: null });
                            window.location.reload();
                        }}>
                        Reload Page
                    </Button>
                    <details style={{ marginTop: '1rem', maxWidth: '600px' }}>
                        <summary style={{ cursor: 'pointer' }}>Error Details</summary>
                        <pre style={{ 
                            marginTop: '1rem', 
                            padding: '1rem', 
                            background: 'var(--scheme-gray-900)',
                            borderRadius: 'var(--radius-s)',
                            overflow: 'auto',
                            fontSize: '0.875rem'
                        }}>
                            {this.state.error?.stack}
                        </pre>
                    </details>
                </Flex>
            );
        }

        return this.props.children;
    }
}
