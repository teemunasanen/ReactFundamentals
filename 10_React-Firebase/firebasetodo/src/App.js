import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddTodo from "./AddTodo";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import "./App.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(
      "https://todolist-65719-default-rtdb.europe-west1.firebasedatabase.app/items/.json"
    )
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  //Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) =>
      Object.defineProperty(item, "id", { value: keys[index] })
    );
    setTodos(valueKeys);
  };

  const addTodo = (newTodo) => {
    fetch(
      "https://todolist-65719-default-rtdb.europe-west1.firebasedatabase.app/items/.json",
      {
        method: "POST",
        body: JSON.stringify(newTodo),
      }
    )
      .then((response) => fetchItems())
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    fetch(
      `https://todolist-65719-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => fetchItems())
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Appbar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap>
            TodoList
          </Typography>
        </Toolbar>
      </Appbar>
      <AddTodo addTodo={addTodo} />
      <div
        className="ag-theme-material"
        style={{ height: 400, width: 700, margin: "auto" }}
      >
        <AgGridReact rowData={todos}>
          <AgGridColumn sortable={true} filter={true} field="description" />
          <AgGridColumn sortable={true} filter={true} field="date" />
          <AgGridColumn sortable={true} filter={true} field="priority" />
          <AgGridColumn
            headerName=""
            field="id"
            width={90}
            cellRendererFramework={ params => (
              <IconButton
                onClick={() => deleteTodo(params.value)}
                size="small"
                color="secondary"
              >
                <DeleteIcon />
              </IconButton>
            )}
          />
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
