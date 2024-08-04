import React from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProsDemo } from './components/props-demo/props-demo';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { PropsDemo2 } from './components/props-demo/props-demo2';
import { AdminLogin } from './class-component/adminlogin/admin-login';
import { State } from './class-component/state/class-state';
import { ClassEventDemo } from './class-component/class-event/class-event-demo';
import { Shopper } from './class-component/class-event/class-event2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shopper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
