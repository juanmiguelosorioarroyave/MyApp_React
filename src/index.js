import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Components/layouts/Card/Card';
import Menu from  './Components/layouts/header/header';
import Main from './Components/UI/Main/Main';
import Main2 from './Components/UI/Main2/Main2';
import Footer from './Components/layouts/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Main />
    <Main2 />
    <Card />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
