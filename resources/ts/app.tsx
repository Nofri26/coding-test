import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from '@/redux/store.ts';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </React.StrictMode>
);
