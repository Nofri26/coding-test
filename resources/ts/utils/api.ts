import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        // console.log(error.response);
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
            // const navigate = useNavigate();
            // navigate('/login');
        }
        return Promise.reject(error);
    }
);

export default api;
