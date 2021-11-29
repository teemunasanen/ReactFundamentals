import React, { useState } from 'react';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [query, setQuery] =useState('');

  const fetchData = () => {
    fetch(' https://api.github.com/search/repositories?q=' + query)
    .then(response => response.json())
    .then(resData => setRepositories(resData.items))
  };

  const inputChanged = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className="App">
       <h1>Repositories</h1>
        <input placeholder='Search repositories' value={query} onChange={inputChanged}></input><button onClick={fetchData}>Search</button>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
        </thead>
        <tbody>
        {
          repositories.map((repository, index) => 
           <tr key={index}>
             <td>{repository.full_name}</td>
             <td><a href={repository.url}>{repository.url}</a></td>
           </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;