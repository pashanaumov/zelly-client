import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { runFetchData } from '../redux/sagas/authSaga';
import { sagaActions } from '../redux/sagas/sagaActions';

const LOGIN = 'p.b.naumov@gmail.com';
const PASSWORD = 'pavliknaumov12';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const userToken = useSelector((state: RootState) => state.auth.authenticated);

  async function onLogin() {
    dispatch(runFetchData({ email: LOGIN, password: PASSWORD }));
  }

  async function onLogout() {
    dispatch({ type: sagaActions.LOGOUT_USER });
  }

  if (!userToken) {
    return (
      <div>
        <button onClick={onLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
