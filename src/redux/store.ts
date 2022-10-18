import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from 'redux-thunk';

type auth = {
    primaryToken: String;
    refreshToken: String;
    loading: boolean;
    error: boolean;
    data: {}
};

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;