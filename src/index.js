import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ClockContextProvider } from './context/clockContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClockContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClockContextProvider>,
);