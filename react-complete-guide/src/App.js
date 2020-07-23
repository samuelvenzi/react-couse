import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Samuel", age: "23" },
      { id: "2", name: "Fernanda", age: "23" },
      { id: "3", name: "Pedro", age: "18" },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Fernanda", age: "23" },
        { name: "Pedro", age: "18" },
      ],
      show: "false"
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.show
    this.setState({ show: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }


  render() {

    let persons = null

    if (this.state.show) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  clicked={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id} />
              )
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <h1>One more</h1>
        <button onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
