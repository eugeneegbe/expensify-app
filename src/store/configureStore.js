import { createStore, combineReducers } from 'redux';

import filterReducer from '../reducers/filters';
import expenseReducer from '../reducers/expense';

const demoState = {
    expenses: [
        {
            id: 'adskjfdashfjkdsaf',
            description: 'January Rent',
            note: 'Rents for the month of Jan',
            amount: '5430',
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const configureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    //subscribe store to listen to changes
    store.subscribe(() => {});
    return store;
}

export default configureStore;