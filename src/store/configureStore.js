import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filterReducer from '../reducers/filters';
import expenseReducer from '../reducers/expense';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
        composeEnhancers(applyMiddleware(thunk))
    );

    //subscribe store to listen to changes
    store.subscribe(() => {});
    return store;
}

export default configureStore;