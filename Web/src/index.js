import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Views/App';
import reportWebVitals from './reportWebVitals';
//import './CSS/global.css'
import './CSS/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();