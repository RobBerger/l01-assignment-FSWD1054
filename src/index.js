import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const name = React.createElement('h1', null, 'Robert Berger');
const subTitle = React.createElement('p', null, 'Aspiring Software Developer');
const container1 = React.createElement('div',{id:'header'}, [name, subTitle]);

let aboutMe = ['Focused', 'Avid-Reader', 'Pilot'];

// aboutMe.map((value) => React.createElement('li', null, {value}));

aboutMe.map(function (value) {
  return React.createElement('li', null, `${value}`);
});

const container2 = React.createElement('ul', null, [aboutMe]);


const container = React.createElement('div', null, [container1, container2]);

ReactDOM.render(
  container,
  document.getElementById('root')
);