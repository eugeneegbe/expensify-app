import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
        state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focusCalendar: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({ description } ));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState( () => ({ amount }))
        }
    };

    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState( () => ({ note }))
    };

    onDateChage = (createdAt) => {
        this.setState( () => ( { createdAt } ) );
    };

    onFocusChange = (focused) => {
        this.setState( () => ( {focusCalendar: focused.focused} ) );
    };

    render(){
        return(
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus={true}
                        onChange={this.onDescriptionChange}
                    />
                    <br></br>
                    <input
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    /><br></br>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChage}
                        focused={this.state.focusCalendar}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        onChange={this.onNoteChange}
                        value={this.state.note}
                        placeholder='Add a note for expense'
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
