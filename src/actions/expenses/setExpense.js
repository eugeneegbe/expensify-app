import database from '../../firebase/firebase';

const setExpense = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
})

export const startSetExpense = () => {
    return (dispatch) => {
        const expenses = [];
        database.ref('expenses').once('value').then(
            (snapshot) => {
                snapshot.forEach( (childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
            }
        )
        dispatch(setExpense(expenses));
    }
};
export default startSetExpense;