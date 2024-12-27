import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const isAuthenticated = Boolean(localStorage.getItem('authToken'));
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
