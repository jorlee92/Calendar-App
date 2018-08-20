import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StylePicker extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.changebgcolor('green')} className="button">Green</button>
                <button onClick={() => this.props.changebgcolor('blue')} className="button">Blue</button>
                <button onClick={() => this.props.changebgcolor('red')} className="button">Red</button>
            </div>
        )
    }
}
StylePicker.propTypes = {
    changebgcolor: PropTypes.func
  };
export default StylePicker;