import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: -1000
},
{
    id: '3',
    description: 'credit card',
    note: '',
    amount: 205,
    createdAt: 1000
}];

test('Should filter expenses by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    const filteredExpenses = [expenses[2], expenses[1]];
    expect(result).toMatchObject(filteredExpenses);
});