import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes/AppRoutes';

const root = document.getElementById('app');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <AppRoutes />
        </React.StrictMode>
    );
}
