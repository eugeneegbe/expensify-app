import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const expenseReducerDefaultState = [];

// Actions fall here
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ( {id} = {} ) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

const expenseReducer = ( state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    
    case 'REMOVE_EXPENSE':
      return state.filter( expense => (expense.id != action.id) );
    
      default:
      return state;
  }
}

console.log('we are here ')

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
//subscribe store to listen to changes
store.subscribe(() => {
  console.log('---->',store.getState())
});

// we displatch the addexpesne reducer with some data
const exspenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 100} ));
const expenseTwo = store.dispatch(addExpense( { description: 'Coffee', amount: 300} ));

store.dispatch(removeExpense({ id: exspenseOne.expense.id }));
