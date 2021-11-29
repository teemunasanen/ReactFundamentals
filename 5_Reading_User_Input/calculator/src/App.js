import React, { useState } from 'react';
import './App.css';

function App() {
  const [numer, setNumer] = useState({first: '', second: ''});
  const [result, setResult] = useState(0);

  const inputChanged = (event) => {
    setNumer({...numer, [event.target.name]: event.target.value});
  }

  const sum = () => {
    setResult((Number(numer.first) + Number(numer.second)));
  }

  const subtraction = () => {
    setResult((Number(numer.first) - Number(numer.second)));
  }

  return (
    <div className="App">
      Result = {result.toFixed(1)}<br />
     
      <input placeholder='First number' name='first' value={numer.first} onChange={inputChanged} />
      <input placeholder='Second number' name='second' value={numer.second} onChange={inputChanged} />
      <button onClick={sum}>+</button>
      <button onClick={subtraction}>-</button>
    </div>
  );
}

export default App;
