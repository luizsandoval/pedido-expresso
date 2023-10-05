import { MutableRefObject, useCallback, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement | null>(
    ref: MutableRefObject<T>,
    callback: () => void,
) => {
    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (ref.current && e && !ref.current.contains(e.target as Node))
                callback();
        },
        [ref, callback],
    );

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);
};

export { useOutsideClick };
