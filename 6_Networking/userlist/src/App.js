import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(resData => setUsers(resData.data))
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
        {
          users.map((user, index) => 
           <tr key={index}>
             <td>{user.first_name}</td>
             <td>{user.last_name}</td>
             <td>{user.email}</td>
             <td><img alt='Avatar img' src={user.avatar} /></td>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
  );
}

export default App;
