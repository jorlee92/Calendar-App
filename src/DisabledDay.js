import React, { Component } from 'react';
class DisabledDay extends Component {
    constructor(props){
        super(props);
        this.state = { 
            dayNumber : props.dayNumber,
            agenda: [],
        }
    }
    render(){
        return (<li>{this.props.dayNumber}</li>)
    }
}
export default DisabledDay

