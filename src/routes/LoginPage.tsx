import React from 'react';
import { useDispatch } from 'react-redux';
import { runFetchData } from '../redux/sagas/authSaga';
import { UserEmail, UserPassword } from '../types/Utility/User';
import { useFormik } from 'formik';

export const LoginPage = () => {
  const dispatch = useDispatch();

  async function onLogin({ email, password }: { email: UserEmail; password: UserPassword }) {
    dispatch(runFetchData({ email, password }));
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await onLogin({ ...values });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />

      <button type="submit">Submit</button>
    </form>
  );
};
