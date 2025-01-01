import * as Yup from 'yup';

export const usernameValidation = Yup.string()
    .required('Username is required')
    .matches(/^[a-zA-Z0-9.]+$/, 'Username can only contain letters, numbers, and dots');
