import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  </>
);

export default App;
