import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Titles from './Components/Titles';
import Search from './Components/Search';
import Results from './Components/Results';
import Links from './Components/Links';
import Modal from './Components/Modal';

const API_KEY = '3110d706-0b47-4ffa-8b16-ed33de45f0ef';
/**
 * Main App Class
 */
class App extends React.Component {
  /**
   * Initializes default states
   */
  state = {
    show: false,
    definition1: null,
    error: null,
    searchedWord: null,
  }
  /**
   * Toggles if modal renders
   */
  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  /**
   * Changes state of only error
   */
  setErrorState = () => {
    this.setState({
      searchedWord: null,
      definition1: null,
      error: 'Please enter an English word.',
    });
  }
  /**
   * Gets short definition of word from JSON generated by API
   * @param {event} e
   */
  getWord = async (e) => {
    e.preventDefault();
    const word = e.target.elements.word.value;
    const API_CALL = await fetch('https://dictionaryapi.com/api/v3/references/collegiate/json/'
     + word + '?key=' + API_KEY);
    if (word) {
      const result = await API_CALL.json();
      if (result[0].shortdef) {
        this.setState({
          searchedWord: word,
          definition1: result[0].shortdef[0],
          error: null,
        });
      } else {
        this.setErrorState();
      }
    } else {
      this.setErrorState();
    }
  }
  /**
   * Renders App in webpage
   * @return {function} rendered JSX
   */
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="row" >
            <Titles/>
          </div>
          <div className="row2">
            <Results
              searchedWord={this.state.searchedWord}
              definition1={this.state.definition1}
              error={this.state.error}
            />
            <Search getWord = {this.getWord}/>
            <div className="row3">
              <Modal
                show={this.state.show}
                onClose={this.showModal}
              >
              </Modal>
              <Links showModal={this.showModal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
