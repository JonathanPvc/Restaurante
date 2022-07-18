import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';
import InputNavBar from './components/Inputs/InputNavBar';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();