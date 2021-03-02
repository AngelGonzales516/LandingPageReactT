import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BrandHeader from './Components/BranHeader/BrandHeader'
import './Components/Navbars/Body.css'
import Footer from './Components/Footer/Footer'
import Body from './Components/Navbars/Body'



ReactDOM.render(
  <React.StrictMode>
    <BrandHeader/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
