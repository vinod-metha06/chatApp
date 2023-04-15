import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import RootSaga from './rootsaga';
import { loginReducer } from './reducer/loginReducer';
import { registerReducer } from './reducer/registerReducer';

const sagaMiddleWare = createSagaMiddleware();

const store=configureStore({
    middleware: defaultMiddleware =>
    defaultMiddleware({thunk: false}).prepend(sagaMiddleWare),
  reducer: {
    loginReducer:loginReducer,
    registerReducer:registerReducer
    
  },
});

sagaMiddleWare.run(RootSaga);
export default store;