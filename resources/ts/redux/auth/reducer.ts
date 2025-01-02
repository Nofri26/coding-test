import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from './actions';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload, loading: false };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case REGISTER_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload, loading: false };
        case LOGOUT:
            return { ...state, isAuthenticated: false, user: null };
        default:
            return state;
    }
};

export default reducer;
