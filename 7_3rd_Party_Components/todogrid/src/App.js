import React, { useState } from 'react';
import './App.css';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

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
      <div className='ag-theme-material' style={{ height: 600, width: 600, margin: 'auto' }}>
        <AgGridReact rowData={todos}>
          <AgGridColumn field='description'></AgGridColumn>
          <AgGridColumn field='date'></AgGridColumn>
          <AgGridColumn field='status'></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;