import { put } from "redux-saga/effects";
import { getCartItemsAPI,  } from "../../service/service";
import { dispatchGetCartItemLoaded, dispatchGetCartItemLoading, dispatchGetCartItemLoadingError, dispatchGetUserLoaded, dispatchGetUserLoading, dispatchGetUserLoadingError, dispatchLogged, dispatchLogin, dispatchLoginError, dispatchLoginIn, dispatchRegistered, dispatchRegistering, dispatchRegistrationError } from "../action";



export default function* geCartItemSaga(action:any):any{
   
yield put(dispatchGetCartItemLoading());
try {
  const response=  yield getCartItemsAPI(action.payload);
    console.log("called at s",response)
    yield put(dispatchGetCartItemLoaded(response));
} catch (error) {
    yield put(dispatchGetCartItemLoadingError());
}

}