import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Home from '@/pages/home';
import Login from '@/auth/login.tsx';
import Dashboard from '@/pages/dashboard';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Route>

                <Route element={<PrivateRoutes />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
