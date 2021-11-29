import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }

  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
        {
         todos.map((todo, index) => 
           <tr key={index}>
             <td>{todo.description}</td>
             <td>{todo.date}</td>
             <td>{todo.status}</td>
           </tr>)
         }
         </tbody> 
       </table>
    </div>
  );
}

export default App;