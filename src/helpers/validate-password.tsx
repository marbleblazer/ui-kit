const UPPERCASE_REGEX = /[A-Z]/;
const DIGIT_REGEX = /\d/;
const SPECIAL_CHAR_REGEX = /[!@$&?_+\-*/]/;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 16;

const PASSWORD_LENGTH_ERROR_TEXT = 'Password must be between 8 and 16 characters long';
const PASSWORD_UPPERCASE_ERROR_TEXT = 'Password must contain at least one uppercase letter';
const PASSWORD_DIGIT_ERROR_TEXT = 'Password must contain at least one digit';
const PASSWORD_SPECIAL_CHAR_ERROR_TEXT =
    'Password must contain at least one special character (!, @, $, &, ?, _, -, +, *, /)';

export const validatePassword = (password: string) => {
    // Проверка длины пароля
    if (password.length < PASSWORD_MIN_LENGTH || password.length > PASSWORD_MAX_LENGTH) {
        return PASSWORD_LENGTH_ERROR_TEXT;
    }

    if (!UPPERCASE_REGEX.test(password)) {
        return PASSWORD_UPPERCASE_ERROR_TEXT;
    }

    if (!DIGIT_REGEX.test(password)) {
        return PASSWORD_DIGIT_ERROR_TEXT;
    }

    if (!SPECIAL_CHAR_REGEX.test(password)) {
        return PASSWORD_SPECIAL_CHAR_ERROR_TEXT;
    }

    // password valid
    return '';
};
