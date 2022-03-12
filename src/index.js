import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode >
    <audio id="beep" preload="auto" src="https://www.pacdv.com/sounds/interface_sound_effects/sound107.wav" />

<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
