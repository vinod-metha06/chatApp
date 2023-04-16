import { put } from "redux-saga/effects";
import { getUserAPI, handleLogin, handleSignUp } from "../../service/service";
import { dispatchGetUserLoaded, dispatchGetUserLoading, dispatchGetUserLoadingError, dispatchLogged, dispatchLogin, dispatchLoginError, dispatchLoginIn, dispatchRegistered, dispatchRegistering, dispatchRegistrationError } from "../action";



export default function* getUserSaga(action:any):any{
   
yield put(dispatchGetUserLoading());
try {
  const response=  yield getUserAPI(action.payload);
    console.log("called at s",response)
    yield put(dispatchGetUserLoaded(response));
} catch (error) {
    yield put(dispatchGetUserLoadingError());
}

}