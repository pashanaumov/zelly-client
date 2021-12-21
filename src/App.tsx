import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { runFetchData } from './redux/sagas/authSaga';
import { RootState } from './redux/store';
import { sagaActions } from './redux/sagas/sagaActions';

import './App.css';
import { usePrevious } from './hooks/usePrevious';

const LOGIN = 'p.b.naumov@gmail.com';
const PASSWORD = 'pavliknaumov12';

export const App = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userToken = useSelector((state: RootState) => state.auth.authenticated);
  const user = useSelector((state: RootState) => state.user.user);

  async function onLogin() {
    dispatch(runFetchData({ email: LOGIN, password: PASSWORD }));
  }

  async function onLogout() {
    dispatch({ type: sagaActions.LOGOUT_USER });
  }

  useEffect(() => {}, [userToken]);

  const prevToken = usePrevious(userToken);

  if (!prevToken && userToken) {
    navigate('/');
  }

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
        <Link to="/login">Login</Link> | <Link to="/fetcher">Fetcher</Link> | <Link to={'/register'}>Register</Link> | <Link to={'/fetcher2'}>Fetcher 2</Link>
      </nav>
    </div>
  );
};
