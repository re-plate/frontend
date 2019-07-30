import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './store/reducers/index';

import { BrowserRouter as Router} from "react-router-dom";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
    document.getElementById('root'));
    
