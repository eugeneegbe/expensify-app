import React from 'react';

import { connect } from 'react-redux';
import setFilterText from '../actions/filters/setFilterText';
import sortByDate from '../actions/filters/setSortByDate';
import sortByAmount from '../actions/filters/setSortByAmount';


const ExpenseListFilters = (props) => (
    <div className='content-container'>
        <div className='input-group'>
            <div className='input-group__item'>
                <input
                    value={props.filters.text}
                    className='text-input'
                    placeholder='Search expenses'
                    onChange={(e) => {  
                        props.dispatch(setFilterText({text: e.target.value}))
                    }}
                />
            </div>
            <div className='input-group__item'>
                <select
                    value={props.filters.sortBy}
                    className='select'
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
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);