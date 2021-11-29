import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [explanation, setExplanation] = useState('');
  const [url, setUrl] = useState('');
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => {
      setExplanation(data.explanation);
      setUrl(data.url);
      setReady(true);
    })
    .catch(err => console.log(err))
  }, [])

  if (!isReady)
  return <div>Loading...</div>

  return (
    <div className="App">
     <p>{explanation}</p>
     <img alt='Nasa apod' src={url} />
    </div>
  );
}

export default App;
