import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import startAddExpense from '../actions/expenses/addExpense';

const AddExpensePage = (props) => (
    <div>
        <div className='page-header'>
            <div className='content-container'>
                <h2 className='page-header__title'>Add Expense</h2>
            </div>

        </div>
        <ExpenseForm
            onSubmit={ (expense) => {
                props.dispatch(startAddExpense(expense) )
                props.history.push( '/' );
            }}
        /> 
    </div>
)

export default connect()(AddExpensePage);