import { useDispatch } from 'react-redux';
import Card from '../../components/card';
import Button from '@/components/button.tsx';
import { logout } from '@/redux/auth/actions.ts';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className={'bg-slate-50 min-h-screen antialiased flex justify-center items-center'}>
            <div className={'max-w-7xl w-full'}>
                <Card>
                    <Card.Body>
                        <div className='flex justify-center items-center'>You are on the Dashboard page!</div>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={handleLogout}>Logout</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Index;
