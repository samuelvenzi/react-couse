import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Samuel", age: "23" },
      { name: "Fernanda", age: "23" },
      { name: "Pedro", age: "18" },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Fernanda", age: "23" },
        { name: "Pedro", age: "18" },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <h1>One more</h1>
        <button onClick={() => this.switchNameHandler("Sam!")}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
