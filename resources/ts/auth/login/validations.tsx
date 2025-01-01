import * as Yup from 'yup';
import { passwordValidation, usernameValidation } from '@/utils/validations';

export const loginValidationSchema = Yup.object().shape({
    username: usernameValidation,
    password: passwordValidation,
});
