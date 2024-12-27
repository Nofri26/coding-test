import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import Button from '../../components/button';

const Index = () => {
    const navigateToLogin = useNavigate();

    const handleLogin = () => {
        navigateToLogin('/login');
    };

    return (
        <div className={'bg-slate-50 min-h-screen antialiased flex justify-center items-center'}>
            <div className={'max-w-7xl w-full'}>
                <Card>
                    <Card.Body>
                        <div className='flex justify-center items-center'>Your in home page!</div>
                    </Card.Body>
                    <Card.Footer>
                        <div className={'flex justify-end items-end'}>
                            <Button variant={'primary'} onClick={handleLogin}>
                                Login
                            </Button>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Index;
