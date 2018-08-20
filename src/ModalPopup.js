import React, { Component } from 'react';
/* wip separating this popup into its own component */
class ModalPopup extends Component {
    constructor(props){
        super(props);
        this.state = { 

        }
    }
    render() {
        return (<div className={(this.props.modalIsVisible ? "modal is-active" : "modal")}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Agenda Item</p>
            <button onClick={this.toggleModalState} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <textarea id='text-box' className="textarea" placeholder="Item Description goes here"></textarea>
            <input id='time' className="input" placeholder="Time Goes here"></input>
          </section>
          <footer className="modal-card-foot">
            <button onClick={this.addItem} className="button is-success">Save changes</button>
            <button onClick={this.toggleModalState} className="button">Cancel</button>
          </footer>
        </div>
      </div>)
    }
}

export default ModalPopup;