import { useCallback, useState } from 'react';

export const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);

    const toggle = useCallback(() => {
        setValue((v) => !v);
    }, [setValue]);

    const setTrue = useCallback(() => {
        setValue(true);
    }, [setValue]);

    const setFalse = useCallback(() => {
        setValue(false);
    }, [setValue]);

    return {
        value,
        setValue,
        toggle,
        setTrue,
        setFalse,
    };
};
