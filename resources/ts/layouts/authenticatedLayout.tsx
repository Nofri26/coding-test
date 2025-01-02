import React, { ReactNode } from 'react';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import UserInformation from '@/components/userInformation.tsx';

interface AuthenticatedLayoutProps {
    children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col h-screen bg-slate-50'>
            <Topbar />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <div className='flex-1 overflow-y-auto p-6'>{children}</div>
                <UserInformation />
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
