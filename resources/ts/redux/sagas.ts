import { all } from 'redux-saga/effects';
import watchAuthSaga from './auth/saga.ts';
import { moduleSaga } from './content/module/saga.ts';

export default function* rootSaga() {
    yield all([watchAuthSaga(), moduleSaga()]);
}
