import { call, put, takeLatest } from 'redux-saga/effects';
import { ModuleActionTypes } from './actions';
import api from '@/utils/api';

function* fetchDataSaga(action: any): Generator<any> {
    try {
        const { search, page } = action.payload;
        const response: any = yield call(api.get, '/modules', {
            params: { search, page },
        });

        yield put({ type: ModuleActionTypes.FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error: any) {
        console.error('Saga Error:', error.message);
        yield put({ type: ModuleActionTypes.FETCH_DATA_FAILURE, payload: error.message });
    }
}

export function* moduleSaga() {
    yield takeLatest(ModuleActionTypes.FETCH_DATA_REQUEST, fetchDataSaga);
}
