import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
    const isAuthenticated = Boolean(localStorage.getItem('authToken'));
    return isAuthenticated ? <Navigate to='/dashboard' /> : <Outlet />;
};

export default PublicRoutes;
