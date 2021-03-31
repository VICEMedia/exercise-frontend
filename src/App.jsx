import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages';

import '../application.scss';

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
