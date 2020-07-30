import moment from 'moment';

import setStartDate from '../../../actions/filters/setStartDate';
import setEndDate from '../../../actions/filters/setEndDate';
import setFilterText from '../../../actions/filters/setFilterText';
import sortByAmount from '../../../actions/filters/setSortByAmount'

test('Should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate setFilterText action object with value', () => {
    const action = setFilterText('date');
    expect(action).toEqual({
        type: 'SET_TEXT_FiLTER',
        text: 'date'
    });
});

// test('Should generate setFilterText action object without value', () => {
//     const action = setFilterText();
//     expect(action).toEqual({
//         type: 'SET_TEXT_FILTER',
//         text: ''
//     });
// });

test('Should set sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});