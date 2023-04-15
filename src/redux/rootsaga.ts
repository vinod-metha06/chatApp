import {takeEvery,take,takeLatest} from 'redux-saga/effects';
import { ChatAction } from '../constants/actionConstants';
import loginSaga from './sagas/loginsaga';
import registerSaga from './sagas/registersaga';


export default function* RootSaga(){
    yield takeEvery(ChatAction.LOGIN,loginSaga);
    yield takeEvery(ChatAction.REGISTER,registerSaga);
    
}