import React, { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');

  const fetchQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json())
    .then(resData => setQuestion(resData.results[0].question))
  };

  return (
    <div className="App">
      <p>{question}</p>
      <button onClick={fetchQuestion}>New question</button>
    </div>
  );
}

export default App;
