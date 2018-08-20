import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AgendaItem extends Component {
    constructor(props){
        super(props);
        this.state = { 
            message: "Undefined",
        }
    }
    render() {
        return (<article className="message">
        <div className="message-header">
          <p>{ this.props.message ? this.props.message.substring(0, 10) : "" + "...."}</p>
          <button className="delete" aria-label="delete" onClick={() => this.props.deleteItem(this.props.id)}></button>
        </div>
        <div className="message-body">
        {this.props.message}
        <span className="is-pulled-right">{this.props.time}</span>
        </div>
      </article>
      )
    }
}
AgendaItem.propTypes = {
    deleteItem: PropTypes.func
  };
export default AgendaItem;