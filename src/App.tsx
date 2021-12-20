import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { runFetchData } from './redux/sagas/authSaga';
import { RootState } from './redux/store';
import { sagaActions } from './redux/sagas/sagaActions';

const LOGIN = 'p.b.naumov@gmail.com';
const PASSWORD = 'pavliknaumov12';

export const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.auth.authenticated);

  async function onLogin() {
    dispatch(runFetchData({ email: LOGIN, password: PASSWORD }));
  }

  async function onLogout() {
    dispatch({ type: sagaActions.LOGOUT_USER });
  }

  useEffect(() => {
    console.log({ userToken });
  }, [userToken]);

  return <>{<button onClick={userToken ? onLogout : onLogin}>{userToken ? 'Logout' : 'Login'} me</button>}</>;
};
