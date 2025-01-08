import * as Yup from 'yup';
import { emailValidation, passwordValidation, usernameValidation } from '@/utils/validations';

export const registerValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: usernameValidation,
    email: emailValidation,
    preferred_timezone: Yup.string().required('Timezone is required'),
    password: passwordValidation,
});
