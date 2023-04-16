import {put, call} from 'redux-saga/effects';
import { addToCartAPI, getBestSellingPhoneAPI } from '../../service/service';
import { dispatchAddToCartLoaded, dispatchAddToCartLoading,  dispatchAddToCartLoadingError} from '../action';




export default function* addToCartSagas(action:any): any {
  yield put(dispatchAddToCartLoading());
  try {
    const response = yield addToCartAPI(action.payload);
    console.log(response,'res at saga')
    yield put(dispatchAddToCartLoaded(response));
    
  } catch (error) {
    console.log("Error")
    yield put(dispatchAddToCartLoadingError());
  }
}