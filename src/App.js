import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {name: 'Dante', age: '40'},
      {name: 'Ochi', age: '28'},
      {name: 'Maria', age: '43'},
      {name: 'Pedro', age: '32'},
      {name: 'Manu', age: '23'}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {

    this.setState({ persons: [
      {name: newName, age: '40'},
      {name: 'Och', age: '38'},
      {name: 'Mara', age: '23'},
      {name: 'Pedro', age: '32'},
      {name: 'Mani', age: '23'}
    ]
  });
  }

  nameChangeHandler = (event) => {
    this.setState( { 
    persons: [
      {name: 'Dante', age: '40'},
      {name: event.target.value, age: '38'},
      {name: 'Mara', age: '23'},
      {name: 'Pedro', age: '32'},
      {name: 'Mani', age: '23'}
      ]
    })
  }

  togglePersonsHandler = ()=> {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }
  render() {
    const miStilo = {
      backgroundColor: 'white',
      font: 'inherit',
      border:  '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

      let persons = null;

      if (this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person
              name={person.name}
              age={person.age} />
            })}
          </div> 
        );
      }

    return ( 
    <div className = "App" >
      < h1 >Hi, I 'm a React App</h1> 
         <p> This is really working < /p>
         <button 
         style={miStilo}
         onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}

      </div>

    );
  }
}

export default App;