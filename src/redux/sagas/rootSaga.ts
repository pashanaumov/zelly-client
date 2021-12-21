import { all } from 'redux-saga/effects';
import { authSagas } from './authSaga';
import { registrationSagas } from './registerSaga';

export default function* rootSaga() {
  yield all([authSagas(), registrationSagas()]);
}
