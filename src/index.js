import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Footer from './Footer';
import Header from './Header';
import Herosection from './Herosection';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Herosection /> 
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
