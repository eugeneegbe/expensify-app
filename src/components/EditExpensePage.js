import React from 'react';
import ExpenseForm from '../components/ExpenseForm';

const EditExpensePage = (props) => (
    <div>
        Editing Expense with id: {props.match.params.id}
        <ExpenseForm />
    </div>
)

export default EditExpensePage;