import { useState, useRef, useEffect } from 'react';

export const useObserveElementWidth = <T extends HTMLDivElement>() => {
    const [width, setWidth] = useState(0);
    const ref = useRef<T>(null);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new ResizeObserver((entries) => {
            setWidth(entries[0].contentRect.width);
        });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return {
        width,
        ref,
    };
};
