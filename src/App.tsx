import React from 'react';
import { useAuthService } from './services/AuthService';

const LOGIN = 'p.b.naumov@gmail.com';
const PASSWORD = 'pavliknaumov12';

export const App = () => {
  const { login } = useAuthService();

  async function onLogin() {
    await login(LOGIN, PASSWORD);
  }

  return (
    <>
      <button onClick={onLogin}>Login me</button>
    </>
  );
};
