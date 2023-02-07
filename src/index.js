import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const name = React.createElement('h1', null, 'Robert Berger');
const subTitle = React.createElement('p', null, 'Aspiring Software Developer');
const container1 = React.createElement('div',{id:'header'}, [name, subTitle]);


function listMaker() {
  const aboutMe = ['Focused', 'Avid-Reader', 'Pilot'];
  const listMe = aboutMe.map((aboutList) =>
    <li>{aboutList}</li>
  );
  return (
    <ul>{listMe}</ul>
  );
}




const container = React.createElement('div', null, [container1, listMaker()]);

ReactDOM.render(
  container,
  document.getElementById('root')
);