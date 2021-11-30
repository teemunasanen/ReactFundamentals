import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Todolist</Typography>
          </Toolbar>
      </AppBar>
      <TextField style={{marginRight: 10}} label="Description" name="description" variant="standard" value={todo.description} onChange={inputChanged} />
      <TextField style={{marginRight: 10}} label="Date" name="date" variant="standard" value={todo.date} onChange={inputChanged}/>
      <Button style= {{margin: 10}} color='primary' variant='outlined' onClick={addTodo}>Add</Button>
      <table>
        <tbody>
       {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.description}</td>
             <td>{todo.date}</td>
             <td><IconButton size='small' color='secondary' onClick={() => deleteTodo(index)}><DeleteIcon /></IconButton></td>
            </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;