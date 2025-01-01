export const LOGIN = '[AUTH] LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[AUTH] LOGIN_FAILURE';
export const REGISTER = '[AUTH] REGISTER';
export const REGISTER_SUCCESS = '[AUTH] REGISTER_SUCCESS';
export const REGISTER_FAILURE = '[AUTH] REGISTER_FAILURE';
export const LOGOUT = '[AUTH] LOGOUT';

export const login = (payload: { username: string; password: string }) => ({
    type: LOGIN,
    payload,
});

export const loginSuccess = (user: any) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const register = (payload: { name: string; username: string; email: string; password: string }) => ({
    type: REGISTER,
    payload,
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
});

export const registerFailure = (error: string) => ({
    type: REGISTER_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT,
});
