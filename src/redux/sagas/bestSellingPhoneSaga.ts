import {put, call} from 'redux-saga/effects';
import { getBestSellingPhoneAPI } from '../../service/service';
import { dispatchBestSellingPhoneLoaded, dispatchBestSellingPhoneLoadingError, dispatchBestSellingPhoneLoding } from '../action';




export default function* GetBestSellingPhoneSagas(): any {
  yield put(dispatchBestSellingPhoneLoding());
  try {
    const response = yield getBestSellingPhoneAPI();
   // console.log(response,'res at saga')
    yield put(dispatchBestSellingPhoneLoaded(response));
    console.log("donee")
  } catch (error) {
    console.log("Error")
    yield put(dispatchBestSellingPhoneLoadingError());
  }
}