import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import addExpense from './actions/expenses/addExpense';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import setEndDate from './actions/filters/setEndDate';
import setFilterText from './actions/filters/setFilterText';
import setStartDate from './actions/filters/setStartDate';

ReactDOM.render( <AppRouter />, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = configureStore();

store.dispatch(addExpense( { description: 'Rent', amount: 100, createdAt: 1000} ));
store.dispatch(addExpense( { description: 'Coffee', amount: 300, createdAt: -1000} ));
store.dispatch(setFilterText( {text: 're'} ));
store.dispatch(setStartDate( {startDate: 200} ));
store.dispatch(setEndDate( {endDate: 999} ));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log('vis expenses',visibleExpenses);