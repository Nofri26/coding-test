import Card from '../components/card';
import Button from '../components/button';
import Input from '../components/input';

const Home = () => {
    return (
        <div className={'bg-slate-50 min-h-screen antialiased flex justify-center items-center'}>
            <div className={'max-w-md w-full'}>
                <Card>
                    <Card.Header>
                        <div className={'flex justify-center items-center'}>Login</div>
                    </Card.Header>
                    <Card.Body>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <Input name={'username'} placeholder={'username'} className={'w-full'} />
                            <Input type={'password'} name={'password'} placeholder={'password'} className={'w-full'} />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className={'flex justify-end items-end gap-4'}>
                            <Button variant='primary'>Login</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Home;
