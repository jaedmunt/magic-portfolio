'use client';

import React, { CSSProperties, useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';

import { Flex, Skeleton } from '@/once-ui/components';

export type SmartImageProps = ImageProps & {
    className?: string;
    style?: React.CSSProperties;
    aspectRatio?: string;
    height?: number;
    radius?: string;
    alt?: string;
    isLoading?: boolean;
    objectFit?: CSSProperties['objectFit'];
    enlarge?: boolean;
    src: string;
};

const SmartImage: React.FC<SmartImageProps> = ({
    className,
    style,
    aspectRatio,
    height,
    radius,
    alt = '',
    isLoading = false,
    objectFit = 'cover',
    enlarge = false,
    src,
    ...props
}) => {
    const [isEnlarged, setIsEnlarged] = useState(false);
    const [transform, setTransform] = useState<React.CSSProperties>({});
    const imageRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (enlarge) {
            setIsEnlarged(!isEnlarged);
        }
    };

    useEffect(() => {
        if (isEnlarged) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isEnlarged]);

    useEffect(() => {
        if (typeof window === 'undefined' || !isEnlarged) {
            setTransform({});
            return;
        }

        let mounted = true;

        const calculateTransform = () => {
            if (!mounted || !imageRef.current) return {};
            
            try {
                const rect = imageRef.current.getBoundingClientRect();
                const scaleX = window.innerWidth / rect.width;
                const scaleY = window.innerHeight / rect.height;
                const scale = Math.min(scaleX, scaleY) * 0.9;

                const translateX = (window.innerWidth - rect.width) / 2 - rect.left;
                const translateY = (window.innerHeight - rect.height) / 2 - rect.top;

                return {
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 2,
                };
            } catch (error) {
                return {};
            }
        };

        // Use setTimeout to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            if (mounted && imageRef.current) {
                setTransform(calculateTransform());
            }
        }, 0);

        const handleResize = () => {
            if (mounted) {
                setTransform(calculateTransform());
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            mounted = false;
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isEnlarged]);

    const isVideo = src.endsWith('.mp4');

    return (
        <>
            <Flex
                ref={imageRef}
                fillWidth
                position="relative"
                {...(!isEnlarged && { background: 'neutral-medium' })}
                style={{
                    outline: 'none',
                    overflow: 'hidden',
                    height: aspectRatio
                        ? undefined
                        : height
                        ? `${height}rem`
                        : '100%',
                    aspectRatio,
                    cursor: enlarge ? 'pointer' : 'default',
                    borderRadius: isEnlarged ? '0' : radius ? `var(--radius-${radius})` : undefined,
                    ...transform,
                    ...style,
                }}
                className={classNames(className)}
                onClick={handleClick}>
                {isLoading && (
                    <Skeleton shape="block" />
                )}
                {!isLoading && isVideo && (
                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: isEnlarged ? 'contain' : objectFit,
                        }}
                    />
                )}
                {!isLoading && !isVideo && (
                    <Image
                        {...props}
                        src={src}
                        alt={alt}
                        fill
                        style={{ 
                            objectFit: isEnlarged ? 'contain' : objectFit,
                        }}
                    />
                )}
            </Flex>

            {isEnlarged && enlarge && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    position="fixed"
                    zIndex={1}
                    onClick={handleClick}
                    style={{
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'var(--backdrop)',
                        cursor: 'pointer',
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: isEnlarged ? 1 : 0,
                    }}>
                    <Flex
                        position="relative"
                        style={{
                            height: '100vh',
                            transform: 'translate(-50%, -50%)',
                        }}
                        onClick={(e) => e.stopPropagation()}>
                        {isVideo ? (
                            <video
                                src={src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ 
                                    width: '90vw',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        ) : (
                            <Image
                                {...props}
                                src={src}
                                alt={alt}
                                fill
                                sizes="90vw"
                                style={{ objectFit: 'contain' }}
                            />
                        )}
                    </Flex>
                </Flex>
            )}
        </>
    );
};

SmartImage.displayName = 'SmartImage';

export { SmartImage };