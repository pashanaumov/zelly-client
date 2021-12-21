import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { runFetchData } from './redux/sagas/authSaga';
import { RootState } from './redux/store';
import { sagaActions } from './redux/sagas/sagaActions';
import { FirebaseFetcher } from './testComponents/FirebaseFetcher';
import './App.css';
import { Link } from 'react-router-dom';

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

  const Body = () => {
    if (!user) {
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
        <div>{/*<FirebaseFetcher />*/}</div>
      </>
    );
  };

  return (
    <div className={'App'}>
      <h1>Welcome to Zelly</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/login">Login</Link> | <Link to="/fetcher">Fetcher</Link> | <Link to={'/register'}>Register</Link>
      </nav>
    </div>
  );
};
