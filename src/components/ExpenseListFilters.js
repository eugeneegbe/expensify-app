import React from 'react';

import { connect } from 'react-redux';
import setFilterText from '../actions/filters/setFilterText';

const ExpenseListFilters = (props) => (
    <div>
        <input
            onChange={(e) => {  
                props.dispatch(setFilterText({text: e.target.value}))
            }}
        />
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);