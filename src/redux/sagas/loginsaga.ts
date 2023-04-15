import { put } from "redux-saga/effects";
import { handleLogin, handleSignUp } from "../../service/service";
import { dispatchLogged, dispatchLogin, dispatchLoginError, dispatchLoginIn } from "../action";



export default function* loginSaga(action:any):any{
    console.log("called at saga")
yield put(dispatchLoginIn());
try {
  const response=  yield handleLogin(action.payload);
    console.log("called at s",response)
    yield put(dispatchLogged(response));
} catch (error) {
    yield put(dispatchLoginError());
}

}