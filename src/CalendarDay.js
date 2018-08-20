import React, { Component } from 'react';
class CalendarDay extends Component {
    constructor(props){
        super(props);
        this.state = { 
            dayNumber : props.dayNumber,
            agenda: [],
        }
    }
    render(){
        return (<li onClick={() => this.props.setAgenda(this.state.agenda)} >{this.props.dayNumber}</li>)
    }
}
export default CalendarDay

// {id:0, message: "testing wds3"}, {id:1, message: "testing 4asdfa56"}, {id:2, message: "testing 67asdf8"},{id:0, message: "testing wds3"}, {id:1, message: "testing 4asdfa56"}