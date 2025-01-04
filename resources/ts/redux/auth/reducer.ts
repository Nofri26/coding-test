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
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload, loading: false };
        case LOGIN_FAILURE:
            return { ...state, isAuthenticated: false, error: action.payload, loading: false };
        case REGISTER:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.payload, loading: false };
        case REGISTER_FAILURE:
            return { ...state, isAuthenticated: false, error: action.payload, loading: false };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
};

export default reducer;
