
import database from '../../firebase/firebase';

const removeExpense = (id = '') => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

const startRemoveExpense = (expenseId) => {
    return (dispatch) => {
        const id = expenseId;
        database.ref( 'expenses/' + id ).remove().then(
            (id) => {
                dispatch( removeExpense( {
                    id: id,
                } ) )
            }, (e) => {
                console.log('something went wrong', e.message)
            }
        );
    };
};

export default startRemoveExpense;