import { useEffect } from 'react';
import Card from '@/components/card';
import Button from '@/components/button';
import Input from '@/components/input';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerValidationSchema } from '@/auth/register/validations.tsx';
import { register } from '@/redux/auth/actions.ts';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            dispatch(register(values));
        },
    });
    return (
        <div className={'bg-slate-50 min-h-screen antialiased flex justify-center items-center'}>
            <div className={'max-w-md w-full'}>
                <Card>
                    <Card.Header>
                        <div className={'flex justify-center items-center'}>Register</div>
                    </Card.Header>
                    <form onSubmit={formik.handleSubmit}>
                        <Card.Body>
                            <div className={'flex flex-col w-full gap-4'}>
                                <div>
                                    <Input
                                        name='name'
                                        label='Name'
                                        placeholder='Enter your name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        hasError={!!(formik.touched.name && formik.errors.name)}
                                        errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name='username'
                                        label='Username'
                                        placeholder='Enter your username'
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        hasError={!!(formik.touched.username && formik.errors.username)}
                                        errorMessage={formik.touched.username && formik.errors.username ? formik.errors.username : ''}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type='email'
                                        name='email'
                                        label='E-mail'
                                        placeholder='Enter your email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        hasError={!!(formik.touched.email && formik.errors.email)}
                                        errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type='password'
                                        name='password'
                                        label='Password'
                                        placeholder='Enter your password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        hasError={!!(formik.touched.password && formik.errors.password)}
                                        errorMessage={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type='password'
                                        name='password_confirmation'
                                        label='Password Confirmation'
                                        placeholder='Enter your password again'
                                        value={formik.values.password_confirmation}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        hasError={!!(formik.touched.password_confirmation && formik.errors.password_confirmation)}
                                        errorMessage={
                                            formik.touched.password_confirmation && formik.errors.password_confirmation
                                                ? formik.errors.password_confirmation
                                                : ''
                                        }
                                        required
                                    />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className={'flex justify-end items-end gap-4'}>
                                <Button type={'submit'} variant={'primary'}>
                                    Register
                                </Button>
                            </div>
                        </Card.Footer>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Register;
