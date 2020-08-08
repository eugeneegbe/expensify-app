import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import startAddExpense from '../actions/expenses/addExpense';

const AddExpensePage = (props) => (
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm
            onSubmit={ (expense) => {
                props.dispatch(startAddExpense(expense) )
                props.history.push( '/' );
            }}
        /> 
    </div>
)

export default connect()(AddExpensePage);