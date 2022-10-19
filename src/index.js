import React from 'react';
// import ReactDOM from 'react-dom/client';
import  ReactDOM  from 'react-dom';

import App from './App';
import "./css/main.css";
import  "bootstrap/dist/css/bootstrap.min.css" ;
import reportWebVitals from './reportWebVitals'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
