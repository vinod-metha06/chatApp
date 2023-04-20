import {put, select, call} from 'redux-saga/effects';
import {navigation} from '../../navigation/rootNavigation';
import {handleLogin, handleSignUp} from '../../service/service';
import {
  dispatchLogged,
  dispatchLogin,
  dispatchLoginError,
  dispatchLoginIn,
} from '../action';

export default function* loginSaga(action: any): any {
  yield put(dispatchLoginIn());
  try {
    const response = yield handleLogin(action.payload);
    yield put(dispatchLogged(response));
    if (response) {
      navigation('HomeScreen');
    }
  } catch (error) {
    yield put(dispatchLoginError());
  }
}
