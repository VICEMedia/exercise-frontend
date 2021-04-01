import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages';

import '../application.scss';

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </HelmetProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
