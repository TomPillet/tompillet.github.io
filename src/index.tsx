import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";


i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
