import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { MainAppRouter } from './routes/MainAppRouter';

export const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <MainAppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
