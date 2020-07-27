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
      return state.filter( expense => (expense.id !== action.id) );
    
      default:
      return state;
  }
}

// ============ filter action generators ====

const setFilterText = ({text = ''}) => ({
  type: 'SET_TEXT_FiLTER',
  text
})

const setSortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setSortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})


const setStartDate = ({startDate = undefined}) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndtDate = ({endDate = undefined}) => ({
  type: 'SET_END_DATE',
  endDate
})


const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}


const filterReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FiLTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        }
    case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        }
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

const getVisibleExpenses = ( expenses, {text, sortBy, startDate, endDate} ) => {
  return expenses.filter( (expense) => {
    const startDateMatch = typeof startDate === 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate === 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
}
//subscribe store to listen to changes
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('---->',visibleExpenses)
});

// we displatch the addexpesne reducer with some data
const exspenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 100, createdAt: 1000} ));
const expenseTwo = store.dispatch(addExpense( { description: 'Coffee', amount: 300, createdAt: -1000} ));

const filter_one = store.dispatch(setFilterText( {text: 'coffee'} ));
const startDate = store.dispatch(setStartDate( {startDate: 200} ));
const endDate = store.dispatch(setEndtDate( {endDate: 999} ));
// const sortbyDate = store.dispatch(setSortByDate());
// const sortbyAmount = store.dispatch(setSortByAmount());

// console.log('endDate', startDate)
// store.dispatch(removeExpense({ id: exspenseOne.expense.id }));
