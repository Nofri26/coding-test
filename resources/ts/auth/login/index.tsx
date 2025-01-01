import { useEffect } from 'react';
import Card from '@/components/card';
import Button from '@/components/button';
import Input from '@/components/input';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginValidationSchema } from '@/auth/login/validations.tsx';
import { login } from '@/redux/auth/actions.ts';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            dispatch(login(values));
        },
    });

    const handleRegister = () => {
        navigate('/register');
    };
    return (
        <div className={'bg-slate-50 min-h-screen antialiased flex justify-center items-center'}>
            <div className={'max-w-md w-full'}>
                <Card>
                    <Card.Header>
                        <div className={'flex justify-center items-center'}>Login</div>
                    </Card.Header>
                    <form onSubmit={formik.handleSubmit}>
                        <Card.Body>
                            <div className={'flex flex-col w-full gap-4'}>
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
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className={'flex justify-between items-between gap-4'}>
                                <Button onClick={handleRegister} variant={'primary'}>
                                    Register
                                </Button>
                                <Button type={'submit'} variant={'primary'}>
                                    Login
                                </Button>
                            </div>
                        </Card.Footer>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
