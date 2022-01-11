import React from 'react';
import { MainHeader } from './components/main/MainHeader';
import { withAuth } from './components/hoc/withAuth';
import { MainAppRouter } from './routes/MainAppRouter';

import './App.css';

const App = () => {
  return (
    <div className={'App'}>
      <MainHeader />
      <MainAppRouter />
    </div>
  );
};

export default withAuth(App);
