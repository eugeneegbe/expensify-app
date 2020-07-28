import addExpense from '../../../actions/expenses/addExpense';
import removeExpense from '../../../actions/expenses/removeExpense';
import editExpense from '../../../actions/expenses/editExpense';

import {v4 as uuid} from 'uuid';

test('Should setup removeExpense action object', () => {
    const result = removeExpense( '123abc' );
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup editExpense action object', () => {
    const result = editExpense('123abc',{note: 'New note value'});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New note value'}
    })
})

test('Should setup addExpenses action object with values', () => {
    const expense = { description:'Test', note:'Test note', amount: 200, createdAt: 1000 };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expense
        }
    });
});

test('Should setup addExpense action object without values', () => {
    const expense = { description:'', note:'', amount: 0, createdAt: 0 };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expense
        }
    })
});