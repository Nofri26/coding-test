import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from '@/components/calendar.tsx';

const UserInformation: React.FC = () => {
    const { user } = useSelector((state: any) => state.auth);

    const DummyProfileIcon = () => (
        <svg className='h-32 text-gray-300 mx-auto rounded-full border' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
        </svg>
    );

    return (
        <div className='flex flex-col gap-8 text-center px-4'>
            <div>
                <DummyProfileIcon />
                <h1 className={'font-bold text-xl mt-8'}>Selamat Datang, {user?.name || 'Pengguna'}</h1>
                <span className={'text-slate-400'}>Di LMS by ..</span>
            </div>
            <Calendar />
            <div>
                <h1 className={'flex text-bold text-xl'}>Jadwal Pemateri</h1>
            </div>
        </div>
    );
};

export default UserInformation;
