import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import startEditExpense from '../actions/expenses/editExpense';
import startRemoveExpense from '../actions/expenses/removeExpense';

const EditExpensePage = (props) => {
    console.log(props)
    return(
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h2 className='page-header__title'>Edit Expense</h2>
                </div>
            </div>

            <div className='content-container'>
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={
                        (expense) => {
                            props.dispatch(startEditExpense(props.expense.id, expense))
                            props.history.push( '/' )
                        }
                    }
                />
                <button
                    className='button'
                    onClick={ () => {
                        console.log(props.expense.id)
                        props.dispatch(startRemoveExpense(props.expense.id))
                        props.history.push('/')
                    } }
                >Remove
                </button>

            </div>
        </div>
    )
};

const mapStateToProps = ( state, props ) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
}

export default connect(mapStateToProps)(EditExpensePage);