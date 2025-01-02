export const ModuleActionTypes = {
    FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
};

export const fetchDataRequest = (search: string, page: number) => ({
    type: ModuleActionTypes.FETCH_DATA_REQUEST,
    payload: { search, page },
});

export const fetchDataSuccess = (data: any) => ({
    type: ModuleActionTypes.FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error: any) => ({
    type: ModuleActionTypes.FETCH_DATA_FAILURE,
    payload: error,
});
