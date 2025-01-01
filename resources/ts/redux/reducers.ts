import { combineReducers } from 'redux';
import reducer from './auth/reducer';

const rootReducer = combineReducers({
    auth: reducer,
});

export default rootReducer;
