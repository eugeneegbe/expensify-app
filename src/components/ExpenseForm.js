import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focusCalendar: false,
            error: false
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({ description } ));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState( () => ({ amount }))
        }
    };

    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState( () => ({ note }))
    };

    onDateChage = (createdAt) => {
        if(createdAt){
            this.setState( () => ( { createdAt } ) );
        }
    };

    onFocusChange = (focused) => {
        this.setState( () => ( {focusCalendar: focused.focused} ) );
    };

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: true}))
        }else{
            // we submit the form
            this.setState( () => ({error: false}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render(){
        return(
            <div>
                { this.state.error && <h5>Please provide description and amount</h5>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        className='text-input'
                        value={this.state.description}
                        placeholder='Description'
                        autoFocus={true}
                        onChange={this.onDescriptionChange}
                    />
                    <br></br>
                    <input
                        type='text'
                        className='text-input'
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
                        className='textarea'
                        value={this.state.note}
                        placeholder='Add a note for expense'
                    >
                    </textarea>
                </form>
            </div>
        )
    }
}
