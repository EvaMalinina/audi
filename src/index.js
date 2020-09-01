import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Card } from './pages/card/index';
import { Forms } from './pages/forms/index';

ReactDOM.render(
  <>
    <Card/>
    <Forms/>
  </>,
  document.getElementById('root')
);

