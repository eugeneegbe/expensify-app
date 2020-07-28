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

const exp1 = store.dispatch(addExpense( { description: 'Rent for July', amount: 100, createdAt: 1000} ));
store.dispatch(addExpense( { description: 'Coffee', amount: 300, createdAt: -1000} ));
store.dispatch(addExpense( { description: 'Water Bill', amount: 49500, createdAt: 2000} ));
// store.dispatch(setFilterText( {text: 'Coffee'} ));
store.dispatch(setStartDate( {startDate: 200} ));
store.dispatch(setEndDate( {endDate: 999} ));

const state = store.getState();

console.log(state)

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log('vis expenses',visibleExpenses);


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

