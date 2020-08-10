// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const startRemoveExpense = (id, updates) => {
    return (dispatch) => {
        database.ref( 'expenses/' + id ).update( ...updates ).then(
            () => {
                dispatch( editExpense( id,updates ) )
            }, ( e ) => {
                console.log('something went wrong', e.message)
            }
        );
    };
};

default export startRemoveExpense;