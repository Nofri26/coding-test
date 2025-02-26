import * as Yup from 'yup';

export const passwordValidation = Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long');
// .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
// .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
// .matches(/\d/, 'Password must contain at least one number')
