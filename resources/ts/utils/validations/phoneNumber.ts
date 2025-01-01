import * as Yup from 'yup';

export const phoneNumberValidation = Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits');
