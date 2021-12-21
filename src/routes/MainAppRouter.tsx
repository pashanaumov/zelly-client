import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { LoginPage } from './LoginPage';
import { FirebaseFetcher } from '../testComponents/FirebaseFetcher';
import { RegisterPage } from './RegisterPage';

export const MainAppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path={'register'} element={<RegisterPage />} />
      <Route path="fetcher" element={<FirebaseFetcher />} />
    </Routes>
  );
};
