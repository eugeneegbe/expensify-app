import React from 'react';

import { connect } from 'react-redux';
import setFilterText from '../actions/filters/setFilterText';
import sortByDate from '../actions/filters/setSortByDate';
import sortByAmount from '../actions/filters/setSortByAmount';


const ExpenseListFilters = (props) => (
    <div>
        <input
            value={props.filters.text}
            onChange={(e) => {  
                props.dispatch(setFilterText({text: e.target.value}))
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                const value = e.target.value;
                if (value === 'date') {
                    props.dispatch(sortByDate())
                }else{
                    props.dispatch(sortByAmount())
                }
        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);