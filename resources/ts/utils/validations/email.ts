import * as Yup from 'yup';

export const emailValidation = Yup.string().email('Invalid email format').required('Email is required');
