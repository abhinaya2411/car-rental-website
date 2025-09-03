import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { HashRouter } from 'react-router-dom';

// Initialize AOS
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
