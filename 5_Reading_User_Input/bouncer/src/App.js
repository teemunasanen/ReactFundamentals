import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({name: '', age: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const formSubmitted = (event) => {
    event.preventDefault();
    alert(person.age >= 18
      ? `Hello ${person.name}`
      : `You are too young` 
    )
  }

  return (
    <div className="App">
     <form onSubmit={formSubmitted}>
      <input placeholder='Name' name='name' value={person.name} onChange={inputChanged} />
      <input placeholder='Age' name='age' value={person.age} onChange={inputChanged} />
      <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;
