import {v4 as uuid} from 'uuid';
import database from '../../firebase/firebase';

// Actions fall here
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        database.ref( 'expenses' ).push(expense).then(
            (ref) => {
                dispatch( addExpense({
                    id: ref.key,
                    ...expense
                }))
            }, (e) => {
                console.log('something went wrong', e.message)
            });
    };
};

export default startAddExpense;