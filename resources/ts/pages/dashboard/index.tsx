import Card from '../../components/card';
import AuthenticatedLayout from '@/layouts/authenticatedLayout.tsx';

const Index = () => {
    return (
        <AuthenticatedLayout>
            <Card>
                <Card.Body>
                    <div className='flex justify-center items-center'>Hai You are on the Dashboard page!</div>
                </Card.Body>
            </Card>
        </AuthenticatedLayout>
    );
};

export default Index;
