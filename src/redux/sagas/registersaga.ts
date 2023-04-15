import { put } from "redux-saga/effects";
import { handleLogin, handleSignUp } from "../../service/service";
import { dispatchLogged, dispatchLogin, dispatchLoginError, dispatchLoginIn, dispatchRegistered, dispatchRegistering, dispatchRegistrationError } from "../action";



export default function* registerSaga(action:any):any{
   
yield put(dispatchRegistering());
try {
  const response=  yield handleSignUp(action.payload);
    console.log("called at s",response)
    yield put(dispatchRegistered(response));
} catch (error) {
    yield put(dispatchRegistrationError());
}

}