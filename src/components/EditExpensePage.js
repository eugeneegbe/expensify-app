import React from 'react';
import {connect} from 'react-redux';
import editExpense from '../actions/expenses/editExpense';
import ExpenseForm from '../components/ExpenseForm';
import removeExpense from '../actions/expenses/removeExpense';

const EditExpensePage = (props) => {
    console.log(props)
    return(
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={
                    (expense) => {
                        props.dispatch(editExpense(props.expense.id, expense))
                        props.history.push( '/' )
                    }
                }
            />
            <button
                
                onClick={ () => {
                    console.log(props.expense.id)
                    props.dispatch(removeExpense(props.expense.id))
                    props.history.push('/')
                } }
            >Remove
            </button>
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