import React, { Component } from 'react';
import AgendaItem from './AgendaItem';
import ModalPopup from './ModalPopup';
class DailyAgenda extends Component {
  deleteItem = (id) => {
    console.log(id)
    this.setState((prevState) => {
      var newArray = prevState.items.splice(id, 1);
      return { newArray }
    })
  }

  addItem = (item) => {
    console.log("new item " + item);
    var input = document.getElementById("text-box").value;
    var inputTime = document.getElementById("time").value;

    console.log(input);
    console.log(inputTime);
    this.setState((prevState) => {
      var newArray = prevState.items.push({ id: 0, message: input, time: inputTime });
      return { newArray }
    })
    this.toggleModalState();
  }
  toggleModalState = () => {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      modalIsVisible: false,
      showAddButton: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items });
    this.setState({showAddButton: nextProps.showAddButton})
    console.log("Changed state");

  }

  render() {
    return (
      <div className="container">
        {this.state.showAddButton ? <button className="button is-large" onClick={this.toggleModalState}>Add Item</button> : null }
        {
          this.state.items.map((item, index) => {
            return <AgendaItem deleteItem={this.deleteItem} time={item.time} message={item.message} id={index} />
          }
          )}
        <div className={(this.state.modalIsVisible ? "modal is-active" : "modal")}>
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
        </div>
      </div>)
  }

}
export default DailyAgenda;