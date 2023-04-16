import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import RootSaga from './rootsaga';
import { loginReducer } from './reducer/loginReducer';
import { registerReducer } from './reducer/registerReducer';
import { getUserReducer } from './reducer/getUserReducer';
import { bestSellingPhonereducer } from './reducer/bestSellingPhoneReducer';
import { addToCartReducer } from './reducer/addToCartReducer';
import { alreadyAddToCartReducer } from './reducer/alreadyAddedReducer';
import { getCartItemReducer } from './reducer/getCartItemsReducer';
import { getCategoriesReducer } from './reducer/getCategoriesReducer';

const sagaMiddleWare = createSagaMiddleware();

const store=configureStore({
    middleware: defaultMiddleware =>
    defaultMiddleware({thunk: false}).prepend(sagaMiddleWare),
  reducer: {
    loginReducer:loginReducer,
    registerReducer:registerReducer,
    getUserReducer:getUserReducer,
    bestSellingPhonereducer:bestSellingPhonereducer,
    addToCartReducer:addToCartReducer,
    alreadyAddToCartReducer:alreadyAddToCartReducer,
    getCartItemReducer:getCartItemReducer,
    getCategoriesReducer:getCategoriesReducer
    
  },
});

sagaMiddleWare.run(RootSaga);
export default store;