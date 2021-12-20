import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { App } from './App';
import { PersistGate } from 'redux-persist/integration/react';

export const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
