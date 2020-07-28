import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import removeExpense from '../actions/expenses/removeExpense';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={'/edit/'.concat(id)}>{description}</Link>
        
        <p>${amount} | {createdAt}</p>
        <button
            onClick={ () => {dispatch(removeExpense({ id }))} }
        >Remove</button>
    </div>
)

export default connect()(ExpenseListItem);