import {put, call} from 'redux-saga/effects';
import { getCategoriesAPI } from '../../service/service';
import { dispatchBestSellingPhoneLoaded, dispatchBestSellingPhoneLoadingError, dispatchBestSellingPhoneLoding, dispatchGetCategoriesLoaded, dispatchGetCategoriesLoading, dispatchGetCategoriesLoadingError } from '../action';




export default function* GetCategoriesSagas(action:any): any {
  yield put(dispatchGetCategoriesLoading());
  try {
    const response = yield getCategoriesAPI(action.payload);
    console.log(response,'res at saga')
    yield put(dispatchGetCategoriesLoaded(response));
    console.log("donee")
  } catch (error) {
    console.log("Error")
    yield put(dispatchGetCategoriesLoadingError());
  }
}