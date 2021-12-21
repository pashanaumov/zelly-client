import { all, call, put, takeEvery } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { useAuthService } from '../../services/AuthService';
import { UserResponse } from '../../types/Auth/LoginResponse';
import { UserEmail, UserPassword } from '../../types/Utility/User';
import { authUser } from '../authSlice';
import { setUser } from '../userSlice';

export type LoginUserPayload = {
  type: string;
  password: UserPassword;
  email: UserEmail;
};

function* loginUser(payload: LoginUserPayload) {
  const { email, password } = payload;
  const { login } = useAuthService();
  try {
    const user: UserResponse = yield call(() => login(email, password));
    if (user.token) {
      yield put(authUser(user.token));
      yield put(setUser({ user }));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchloginUser() {
  yield takeEvery(sagaActions.LOGIN_USER, loginUser);
}

function* logoutUser() {
  yield put(authUser(null));
  yield put(setUser({ user: null }));
}

export function* watchLogoutUser() {
  yield takeEvery(sagaActions.LOGOUT_USER, logoutUser);
}

export function runFetchData(payload: { email: UserEmail; password: UserPassword }) {
  return {
    type: sagaActions.LOGIN_USER,
    email: payload.email,
    password: payload.password,
  };
}

export function* authSagas() {
  yield all([watchloginUser(), watchLogoutUser()]);
}
