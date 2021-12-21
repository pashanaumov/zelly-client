import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { runFetchData } from './redux/sagas/authSaga';
import { RootState } from './redux/store';
import { sagaActions } from './redux/sagas/sagaActions';
import { FirebaseFetcher } from './testComponents/FirebaseFetcher';

const LOGIN = 'p.b.naumov@gmail.com';
const PASSWORD = 'pavliknaumov12';

export const App = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const userToken = useSelector((state: RootState) => state.auth.authenticated);
  const user = useSelector((state: RootState) => state.user.user);

  async function onLogin() {
    dispatch(runFetchData({ email: LOGIN, password: PASSWORD }));
  }

  async function onLogout() {
    dispatch({ type: sagaActions.LOGOUT_USER });
  }

  useEffect(() => {
    console.log({ userToken });
  }, [userToken]);

  if (!userToken) {
    return (
      <div>
        <button onClick={onLogin}>Log In</button>
      </div>
    );
  }

  if (user === null) {
    return <></>;
  }

  return (
    <>
      <div
        style={{
          padding: 8,
          border: '1px solid black',
          width: '300px',
        }}
      >
        <div>
          <button onClick={onLogout}>Log Out</button>
        </div>
        <p>{user.email}</p>
        <p>{user.id}</p>
        <p>{user.country}</p>
        <p>{user.language}</p>
      </div>
      <div>
        <FirebaseFetcher />
      </div>
    </>
  );
};
