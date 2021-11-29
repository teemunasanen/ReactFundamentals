import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(' https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(resData => setRepositories(resData.items))
  }, []);

  return (
    <div className="App">
      <table>
        <caption><h1>Repositories</h1></caption>
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
