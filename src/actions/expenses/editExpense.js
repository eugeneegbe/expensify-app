import database from '../../firebase/firebase';

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref( 'expenses/' + id ).update( updates ).then(() => {
            dispatch( editExpense( id, updates ) );
        });
    };
};

export default startEditExpense;