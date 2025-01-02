import React from 'react';
import Input from '@/components/input.tsx';

const Topbar: React.FC = () => {
    return (
        <div className='flex'>
            <div className={'flex w-96  items-center justify-center py-4'}>
                <h1 className='text-4xl'>Logo</h1>
            </div>

            <div className='flex w-full justify-between items-center px-8 py-4'>
                <h2 className='text-2xl uppercase font-semibold'>Learning Management System</h2>
                <div className='flex justify-between items-center space-x-8'>
                    <Input name='search' placeholder='Search' className='w-64' />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-bell font-bold text-slate-500'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
                        <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
                    </svg>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-mail font-bold text-slate-500'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
                        <path d='M3 7l9 6l9 -6' />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
