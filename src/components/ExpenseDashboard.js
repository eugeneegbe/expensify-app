import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { Link } from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        <div className='page-header'>
            <div className='content-container'>
                <p> Welcome to the Expense Application</p>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;