/* eslint-disable no-invalid-this */
import React from 'react';
import * as firebase from 'firebase';

/**
 * Controls the Modal the appears when user clicks sign up button
 */
class Modal extends React.Component {
  /**
   * initializes state values
   */
  state = {
    email: null,
    message: `Join our mailing list for updates on new 
    features and insider information:`,
  }
  /**
  *  helper method that returns state of modal to default
  */
  setDefaultState = () => {
    this.setState({
      email: null,
      message: `Join our mailing list for updates on new 
      features and insider information:`,
    });
  }
  /**
   * @param {Event} e
   */
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
    this.setDefaultState();
  }
  /**
   * @param {String} email user inputed email
   */
  updateEmailState = (email) => {
    this.setState({
      email: email,
    });
  }
  /**
   * @param {String} e
   */
  submit = (e) => {
    e.preventDefault();
    const database = firebase.database();
    const ref = database.ref('Email');
    ref.push(this.state.email);
    this.setState({
      message: 'Thanks for signing up!',
      email: null,
    });
  }
  /**
   * Render element in react
   * @return {function} rendered JSX
   */
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-background">
        {this.props.children}
        <div className="modal-main">
          <p>{this.state.message}</p>
          <form className="modal-input">
            <input
              type="text"
              placeholder="enter email"
              onChange={(e) => this.updateEmailState(e.target.value)}
            />
            <button
              className="submit-button"
              onClick={this.submit}>Submit
            </button>
          </form>
          <button className="modal-close-button" onClick={(e) => {
            this.onClose(e);
          }}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;