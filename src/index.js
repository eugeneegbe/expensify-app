import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import addExpense from './actions/expenses/addExpense';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {Provider}  from 'react-redux';
import setEndDate from './actions/filters/setEndDate';
import setStartDate from './actions/filters/setStartDate';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render( jsx, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

