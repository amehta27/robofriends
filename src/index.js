import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import CardList from './CardList';
import 'tachyons'; 
import reportWebVitals from './reportWebVitals';
// import {robots} from './robots';
import App from './containers/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello greeting = {'Hello' + 'React Ninja'}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
  <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
