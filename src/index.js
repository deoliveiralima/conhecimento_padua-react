import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { RequestProvider } from "react-request-hook";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './configureStore';
import { BrowserRouter } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/"
});

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        
      </Provider>
      
    </RequestProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
