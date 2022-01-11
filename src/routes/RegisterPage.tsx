import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { AppDispatch } from '../redux/store';
import { RegisterUserPayload, runRegisterUser } from '../redux/sagas/registerSaga';
import { UserLanguage } from '../types/Utility/User';

export const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [language, setLanguage] = useState<UserLanguage | ''>('');

  function onRegister(data: Omit<RegisterUserPayload, 'type'>) {
    dispatch(runRegisterUser(data));
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value as UserLanguage);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      country: '',
    },
    onSubmit: (values) => {
      if (language) {
        onRegister({ ...values, language });
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />

      <label htmlFor="country">Country</label>
      <input id="country" name="country" type="text" onChange={formik.handleChange} value={formik.values.country} />

      <label htmlFor="Language">Language</label>
      <select onChange={handleSelectChange}>
        <option value="">{''}</option>
        <option value="RU">Русский</option>
        <option value="ENG">English</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};
