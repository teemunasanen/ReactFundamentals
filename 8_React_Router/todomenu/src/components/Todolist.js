import React, { useState } from "react";
import TodoTable from "./TodoTable";

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "" }); //clear todo
  };

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <div>
      <input
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todolist;