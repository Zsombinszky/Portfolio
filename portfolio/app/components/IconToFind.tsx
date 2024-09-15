import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IconToFindProps } from '@/types';

const IconToFind = ({ href, d, isTop }: IconToFindProps) => {
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const iconRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!iconRef.current) return;

            // Get the bounding rectangle of the icon
            const rect = iconRef.current.getBoundingClientRect();
            const isHovered =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (isHovered !== isLogoHovered) {
                setIsLogoHovered(isHovered);
                console.log(`Hover state changed: ${isHovered}`);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isLogoHovered]);

    return (
        <Link
            href={href}
            ref={iconRef}
            className={`absolute ${isTop ? 'left-8 top-8 bg-black' : 'bottom-8 right-8 bg-white'} ${isLogoHovered ? 'z-20' : 'z-8'} rounded-md inline-block shake-wobble`} // Increase z-index
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill={`${isTop ? '#0077B5' : '#000000'}`}
            >
                <path d={d} />
            </svg>
        </Link>
    );
};

export default IconToFind;
