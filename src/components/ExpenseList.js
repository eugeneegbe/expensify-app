import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListITem';
// import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div>
            <div className='list-header'>
                <div class='show-on-desktop'>Expense</div>
                <div class='show-on-desktop'>Amount</div>
            </div>
        </div>
        <div className='list-body'>
            {
                props.expenses.length === 0 ? (
                    <div>
                        <span className='list-item list-item__message'>No expense</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseList);