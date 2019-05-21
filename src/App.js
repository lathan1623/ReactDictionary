import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Titles from "./Components/Titles";
import Search from "./Components/Search";
import Results from "./Components/Results";
import Links from "./Components/Links"
import Modal from "./Components/Modal"

const api_key = '3110d706-0b47-4ffa-8b16-ed33de45f0ef';

class App extends React.Component {
  
  state = {
    show: false,
    definition1: null,
    error: null,
    searchedWord: null
  }

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  }

  setErrorState = () => {
    this.setState({
        searchedWord: null,
        definition1: null,
        error: "Please enter an English word."
    });
  }

  getWord = async (e) => {
    e.preventDefault();
    const word = e.target.elements.word.value;
    const api_call = await fetch('https://dictionaryapi.com/api/v3/references/collegiate/json/'
     + word + '?key=' + api_key);
    if (word) {
      const result = await api_call.json();
      if (result[0].shortdef) {
        this.setState({
          searchedWord: word,
          definition1: result[0].shortdef[0],
          error: null
        });
      } else {
        this.setErrorState();
      }
    } else {
      this.setErrorState();
    }
  }

  render() {
    return (
      <div>
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
