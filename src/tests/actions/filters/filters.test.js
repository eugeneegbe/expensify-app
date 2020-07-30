import moment from 'moment';

import setStartDate from '../../../actions/filters/setStartDate';
import setEndDate from '../../../actions/filters/setEndDate';
import setFilterText from '../../../actions/filters/setFilterText';


test('Should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate setEndDate action object', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    });
});

test('Should generate setFilterText action object with value', () => {
    const action = setFilterText( { text: 'date' } );
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'date'
    });
});

test('Should generate setFilterText action object without value', () => {
    const action = setFilterText( { text: '' } );
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.any(String)
    });
});
