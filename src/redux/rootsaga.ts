import {takeEvery,take,takeLatest} from 'redux-saga/effects';
import { ChatAction } from '../constants/actionConstants';
import addToCartSagas from './sagas/addToCartSaga';
import alreadyAddToCartSagas from './sagas/alreadyaddedToCartSaga';
import GetBestSellingPhoneSagas from './sagas/bestSellingPhoneSaga';
import geCartItemSaga from './sagas/getCartItemSaga';
import GetCategoriesSagas from './sagas/getCategoriesSaga';
import getUserSaga from './sagas/getUserSaga';
import loginSaga from './sagas/loginsaga';
import registerSaga from './sagas/registersaga';


export default function* RootSaga(){
    yield takeEvery(ChatAction.LOGIN,loginSaga);
    yield takeEvery(ChatAction.REGISTER,registerSaga);
    yield takeEvery(ChatAction.GETUSER,getUserSaga);
    yield takeEvery(ChatAction.GET_BEST_SELLINGS_PHONE,GetBestSellingPhoneSagas);
    yield takeEvery(ChatAction.ADD_TO_CART,addToCartSagas);
    yield takeEvery(ChatAction.ALREADY_ADD_TO_CART,alreadyAddToCartSagas);
    yield takeEvery(ChatAction.GET_CART_ITEM,geCartItemSaga);
    yield takeEvery(ChatAction.GETCATEGORIES,GetCategoriesSagas);
    
}