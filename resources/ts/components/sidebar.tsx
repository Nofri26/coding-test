import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '@/redux/auth/actions.ts';
import { useDispatch } from 'react-redux';
import { IconPower } from 'justd-icons';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'rounded px-4 py-2 bg-slate-50 text-slate-800' : 'rounded px-4 py-2 hover:bg-slate-50 hover:text-slate-800';
};

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className='flex flex-col w-1/6 px-4 py-8 gap-4 h-screen  text-slate-100 bg-slate-800 rounded-tr-3xl overflow-hidden'>
            <NavLink to='/dashboard' className={getNavLinkClass}>
                Dashboard
            </NavLink>
            <NavLink to='/modules' className={getNavLinkClass}>
                Modul
            </NavLink>
            <div className={'flex flex-col gap-4 border-t-2 border-b-2 py-8'}>
                <h1 className={'text-bold tracking-widest font-extralight text-slate-50'}>Profile</h1>
                <NavLink to='#' className={'rounded px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-slate-800'}>
                    Settings
                </NavLink>
                <NavLink to='#' className={'rounded px-4 py-2 text-slate-50 hover:bg-slate-50 hover:text-slate-800'}>
                    Kalender
                </NavLink>
            </div>
            <div className={'flex flex-col gap-4 py-8'}>
                <button
                    onClick={handleLogout}
                    className={'flex items-center gap-4 rounded px-4 py-2 text-left text-slate-50 hover:bg-slate-50 hover:text-slate-800'}>
                    <IconPower />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
