import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.message.length <= 10
      ? <p>{props.message}</p>
      : <p>Too long</p>
      }
    </div>
  );
}

export default App;
