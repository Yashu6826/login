import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ashmit from './Ashmit';
import Waitlist from './waitlist/Waitlist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Ashmit /> */}
    <Waitlist />
  </React.StrictMode>
);

