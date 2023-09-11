import { MutableRefObject, useEffect, useRef } from 'react';

/**
 * Custom hook for adding Intersection Observer functionality.
 *
 * @param {IntersectionObserverCallback} callback - The callback function to be executed when intersection occurs.
 * @param {IntersectionObserverInit} options - The Intersection Observer options.
 */
const useIntersectionObserver = <TargetElement extends HTMLElement>(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
) => {
    const targetRef = useRef<TargetElement | null>();

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const currentTargetRef = targetRef.current;

        if (currentTargetRef) observer.observe(currentTargetRef);

        return () => {
            if (currentTargetRef) observer.unobserve(currentTargetRef);
        };
    }, [targetRef, callback, options]);

    return targetRef as MutableRefObject<TargetElement | null>;
};

export { useIntersectionObserver };
