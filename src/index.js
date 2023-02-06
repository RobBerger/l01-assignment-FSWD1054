import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const name = React.createElement('h1', null, 'Robert Berger');
const subTitle = React.createElement('p', null, 'Aspiring Software Developer');
const container1 = React.createElement('div',{id:'header'}, [name, subTitle]);

const aboutMe = ['Focused', 'Avid-Reader', 'Pilot'];



const container = React.createElement('div', null, [container1]);

ReactDOM.render(
  container,
  document.getElementById('root')
);