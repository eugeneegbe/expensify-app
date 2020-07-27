import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <p>{description} - ${amount} | {createdAt}</p>
    </div>
)

export default ExpenseListItem;