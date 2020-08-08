import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {Provider}  from 'react-redux';
import startSetExpense from './actions/expenses/setExpense';
import './firebase/firebase';

ReactDOM.render( <p>Loading...</p>, document.getElementById('root') );

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

store.dispatch(startSetExpense());

ReactDOM.render( jsx, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

