import {put, call} from 'redux-saga/effects';
import { addToCartAPI, alreadyAddToCartAPI, } from '../../service/service';
import {dispatchAlreadyAddToCartLoaded, dispatchAlreadyAddToCartLoading, dispatchAlreadyAddToCartLoadingError} from '../action';




export default function* alreadyAddToCartSagas(action:any): any {
  yield put(dispatchAlreadyAddToCartLoading());
  try {
    const response = yield alreadyAddToCartAPI(action.payload);
    console.log(response,'res at saga')
    yield put(dispatchAlreadyAddToCartLoaded(response));
    
  } catch (error) {
    console.log("Error")
    yield put(dispatchAlreadyAddToCartLoadingError());
  }
}