import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay: number) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);
    const clear = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, []);
    useEffect(() => {
        set();

        return clear;
    }, [delay, set, clear]);
    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
};
