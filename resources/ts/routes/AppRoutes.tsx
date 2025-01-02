import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Home from '@/pages/home';
import Login from '@/auth/login/';
import Dashboard from '@/pages/dashboard';
import Register from '@/auth/register';
import Modules from '@/pages/content/modules';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<PublicRoutes />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>

                <Route element={<PrivateRoutes />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/modules' element={<Modules />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
