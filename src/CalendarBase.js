import React, { Component } from 'react';
import './CalendarBase.css';
import CalendarDay from './CalendarDay';
import DailyAgenda from './DailyAgenda';
import DisabledDay from './DisabledDay';
import StylePicker from './StylePicker';
class CalendarBase extends Component {


    setAgenda = (items) =>   {
        console.log("Current Agenda" + this.state.AgendaItems)
        this.setState({AgendaItems: items});
        console.log("Changed Agenda" + this.state.AgendaItems)
        this.activateAddButton();

    }
    changeBgColor = (color) => {
        console.log("Changing background");
        if(color === 'blue'){
            console.log('setting to blue')
            this.setState({monthStyle : {
                'padding': '70px 25px',
                'width': '100%',
                'background': "#436cad",
                'textAlign': 'center',
            }})
        } else if (color === 'green'){
            console.log('setting to green')
            this.setState({monthStyle : {
                'padding': '70px 25px',
                'width': '100%',
                'background': "#1abc9c",
                'textAlign': 'center',
            }})
        }
        else if (color === 'red'){
            console.log('setting to green')
            this.setState({monthStyle : {
                'padding': '70px 25px',
                'width': '100%',
                'background': "#ce3737",
                'textAlign': 'center',
            }})

    }}
    activateAddButton = () => {
        this.setState({showAddButton: true})
    }
    constructor(props){
        super(props);
        this.state = { 
            AgendaItems:[],
            DaysInMonth: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            showAddButton: false,
            bgColor: "#1abc9c",
            monthStyle : {
                'padding': '70px 25px',
                'width': '100%',
                'background': "#436cad",
                'textAlign': 'center',
            }
        }
    }
    render() {
        return (<div>
        <div className="month" style={this.state.monthStyle}>     
        <StylePicker changebgcolor={this.changeBgColor}/>
        <ul>
          <li>
            August 2018 
          </li>
        </ul>
      </div>
      
      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>
      
      <ul className="days">  
      <DisabledDay dayNumber ={29} />
      <DisabledDay dayNumber ={30} />
      <DisabledDay dayNumber ={31} />
      {this.state.DaysInMonth.map(day => {
          return <CalendarDay setAgenda={this.setAgenda} dayNumber={day} />
      })

      }

      </ul>
      <br /> <br/>
      <DailyAgenda showAddButton={this.state.showAddButton} items={this.state.AgendaItems} /> 
      </div>
      )
    }
}

export default CalendarBase;