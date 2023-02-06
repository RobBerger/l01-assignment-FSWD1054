import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const name = React.createElement('h1', null, 'Robert Berger');
const subTitle = React.createElement('p', null, 'Aspiring Software Developer');
const header = React.createElement('div', null, [name, subTitle]);

const container = React.createElement('div', null, [header]);

ReactDOM.render(
  container,
  document.getElementById('root')
);