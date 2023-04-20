import {takeEvery,take,takeLatest} from 'redux-saga/effects';
import { EcomAction } from '../constants/actionConstants';
import addToCartSagas from './sagas/addToCartSaga';
import alreadyAddToCartSagas from './sagas/alreadyaddedToCartSaga';
import GetBestSellingPhoneSagas from './sagas/bestSellingPhoneSaga';
import geCartItemSaga from './sagas/getCartItemSaga';
import GetCategoriesSagas from './sagas/getCategoriesSaga';
import getUserSaga from './sagas/getUserSaga';
import loginSaga from './sagas/loginsaga';
import registerSaga from './sagas/registersaga';


export default function* RootSaga(){
    yield takeEvery(EcomAction.LOGIN,loginSaga);
    yield takeEvery(EcomAction.REGISTER,registerSaga);
    yield takeEvery(EcomAction.GETUSER,getUserSaga);
    yield takeEvery(EcomAction.GET_BEST_SELLINGS_PHONE,GetBestSellingPhoneSagas);
    yield takeEvery(EcomAction.ADD_TO_CART,addToCartSagas);
    yield takeEvery(EcomAction.ALREADY_ADD_TO_CART,alreadyAddToCartSagas);
    yield takeEvery(EcomAction.GET_CART_ITEM,geCartItemSaga);
    yield takeEvery(EcomAction.GETCATEGORIES,GetCategoriesSagas);
    
}