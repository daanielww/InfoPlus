//import materialize here because its starting point of application, so only needa load once
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App.js';
import reducers from './reducers';

//development only axios helpers
import axios from 'axios'
window.axios = axios

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store ={store}><App/></Provider>, 
    document.querySelector('#root'));
 
    console.log("STRIPE_KEY is: ", process.env.REACT_APP_STRIPE_KEY)
    console.log("environment is: ", process.env.NODE_ENV);