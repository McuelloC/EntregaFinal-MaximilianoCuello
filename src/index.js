import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyBfjIcEO0BWwJAUNusPH06WOo47Yo4H8ew",
  authDomain: "react-coderhouse-mcuello.firebaseapp.com",
  projectId: "react-coderhouse-mcuello",
  storageBucket: "react-coderhouse-mcuello.appspot.com",
  messagingSenderId: "358555655758",
  appId: "1:358555655758:web:d077278428a68fa7aa6d1f"
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
