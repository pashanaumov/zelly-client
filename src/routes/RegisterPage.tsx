import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { RegisterUserPayload, runRegisterUser } from '../redux/sagas/registerSaga';

export const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const registrationPayload: Omit<RegisterUserPayload, 'type'> = {
    email: 'sveta@gmail.com',
    password: '123456',
    country: 'Russia',
    language: 'RU',
  };

  function onRegister() {
    dispatch(runRegisterUser(registrationPayload));
  }

  return <div onClick={onRegister}>Register User</div>;
};
