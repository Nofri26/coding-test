import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import { moduleReducer } from './content/module/reducer.ts';

const rootReducer = combineReducers({
    auth: authReducer,
    modules: moduleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
