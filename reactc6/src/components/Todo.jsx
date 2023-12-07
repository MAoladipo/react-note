import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.todoContainer}>
      <h2>Todo List</h2>
      <div style={styles.addTodoContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            <span>{todo}</span>
            <button style={styles.removeButton} onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  todoContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  addTodoContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    flex: 1,
    padding: '8px',
    fontSize: '14px',
  },
  addButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  todoList: {
    listStyle: 'none',
    padding: 0,
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '6px',
  },
  removeButton: {
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};







export default TodoList;
