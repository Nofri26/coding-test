import Card from '../../Components/Card';

const Index = () => {
    return (
        <div className={'bg-slate-50 min-h-screen antialiased flex justify-center items-center'}>
            <div className={'max-w-7xl w-full'}>
                <Card>
                    <Card.Body>
                        <div className='flex justify-center items-center'>Your in Dashboard page!</div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Index;
