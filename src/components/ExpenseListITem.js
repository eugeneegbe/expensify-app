import React from 'react';
import {connect} from 'react-redux';
import removeExpense from '../actions/expenses/removeExpense';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <p>{description} - ${amount} | {createdAt}</p>
        <button
            onClick={ () => {
                
                dispatch(removeExpense({ id }))
            } }
        >Remove</button>
    </div>
)

export default connect()(ExpenseListItem);