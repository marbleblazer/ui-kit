import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useEmailValidation = () => {
    const [emailError, setEmailError] = useState<boolean>(false);

    const validateEmail = (value: string): boolean => {
        if (!value.length) return false;

        const isValid = emailRegex.test(value);

        if (value.trim().length > 0) {
            setEmailError(!isValid);
        } else {
            setEmailError(false);
        }

        return isValid;
    };

    const resetEmailError = () => setEmailError(false);

    return {
        emailError,
        validateEmail,
        resetEmailError,
    };
};
