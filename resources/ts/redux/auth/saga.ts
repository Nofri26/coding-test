import { call, put, takeLatest } from 'redux-saga/effects';
import api from '@/utils/api';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from './actions';

function* loginSaga(action: any): Generator<any> {
    try {
        const response = yield call(api.post, '/login', action.payload);

        const { token, user } = response.data;
        localStorage.setItem('authToken', token);

        yield put({ type: LOGIN_SUCCESS, payload: user });
    } catch (error: any) {
        yield put({ type: LOGIN_FAILURE, payload: error.message });
    }
}

function* registerSaga(action: any): Generator<any> {
    try {
        const response = yield call(api.post, '/register', action.payload);

        const { token, user } = response.data;
        localStorage.setItem('authToken', token);

        yield put({ type: REGISTER_SUCCESS, payload: user });
    } catch (error: any) {
        yield put({ type: REGISTER_FAILURE, payload: error.message });
    }
}

function* logoutSaga(): Generator<any> {
    try {
        yield call(api.post, '/logout');
        localStorage.removeItem('authToken');
    } catch (error: any) {
        console.log(error);
    }
}

export default function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}
