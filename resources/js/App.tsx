import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Auth/Login';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
};

const root = document.getElementById('app');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
