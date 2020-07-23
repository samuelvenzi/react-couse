import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {input: "Hey"}

  textChangedHandler = (event) => {
    this.setState({ input: event.target.value })
  }
  
  removeCharHandler = (index) => {
    const input = [...this.state.input]
    input.splice(index, 1)
    const newInput = input.join("")
    this.setState({ input: newInput })
  }

  render() {
    const input = [...this.state.input]

    const charComps = (
      <div>
        {input.map((c, i) => {
          return <CharComponent click={() => this.removeCharHandler(i)} charIn={c} />
        })}
      </div>
    )


    return (
      <div className="App">
        <input type='text' onChange={this.textChangedHandler} value={this.state.input}/>
        <Validation textLength={this.state.input.length}/> 
        {input}
        {charComps}
      </div>
    );
  }
}

export default App;
