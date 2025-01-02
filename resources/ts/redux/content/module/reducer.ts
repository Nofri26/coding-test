import { ModuleActionTypes } from './actions';

interface ModuleState {
    data: any[];
    loading: boolean;
    error: any;
}

const initialState: ModuleState = {
    data: [],
    loading: false,
    error: null,
};

export const moduleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ModuleActionTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case ModuleActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };

        case ModuleActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
