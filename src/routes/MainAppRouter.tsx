import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { FirebaseFetcher } from '../testComponents/FirebaseFetcher';
import { RegisterPage } from './RegisterPage';
import { FirestoreComp } from '../testComponents/FirestoreComp';
import { MainContent } from '../components/main/MainContent';

export const MainAppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="fetcher" element={<FirebaseFetcher />} />
      <Route path="fetcher2" element={<FirestoreComp />} />
    </Routes>
  );
};
