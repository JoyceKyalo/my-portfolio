import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



