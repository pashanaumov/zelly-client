import { all, call, put, takeEvery } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { useAuthService } from '../../services/AuthService';
import { UserResponse } from '../../types/Auth/LoginResponse';
import { UserCountry, UserLanguage } from '../../types/Utility/User';
import { authUser } from '../authSlice';
import { setUser } from '../userSlice';
import { LoginUserPayload } from './authSaga';

export type RegisterUserPayload = LoginUserPayload & {
  language: UserLanguage;
  country: UserCountry;
};

function* registerUser(payload: RegisterUserPayload) {
  const { register } = useAuthService();

  try {
    const user: UserResponse = yield call(() => register(payload));
    if (user.token) {
      yield put(authUser(user.token));
      yield put(setUser({ user }));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchRegisterUser() {
  yield takeEvery(sagaActions.REGISTER_USER, registerUser);
}

export function runRegisterUser(payload: Omit<RegisterUserPayload, 'type'>) {
  const { email, password, language, country } = payload;
  return {
    type: sagaActions.REGISTER_USER,
    email,
    password,
    language,
    country,
  };
}

export function* registrationSagas() {
  yield all([watchRegisterUser()]);
}
