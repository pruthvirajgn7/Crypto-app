import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import CryptoContext from "./CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";
ReactDOM.render(
   <React.StrictMode>
    <CryptoContext>
      <App/>
    </CryptoContext>
   </React.StrictMode>,
  document.getElementById('root')
);





