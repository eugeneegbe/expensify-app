import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers } from 'redux';


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const demoState = {
  expenses:[
    {
      id: 'adskjfdashfjkdsaf',
      description: 'January Rent',
      note: 'Rents for the month of Jan',
      amount: '5430',
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const expenseReducerDefaultState = [];

const expenseReducer = ( state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case '':
      break;
  
    default:
      return state;
  }
}

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case '':
      break;
  
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

console.log(store.getState())