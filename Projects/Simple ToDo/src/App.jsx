import './styles.css';
import { useState } from 'react';
import { TodoItem } from './TodoItem.jsx';

// Main component
function App() {
  // Adding state to the input
  const [input, setInput] = useState('');
  // Adding state to the todo list
  const [todo, setTodo] = useState([]);

  // Add a new todo item to the list
  function addTodoItem() {
    if (todo === '') return;

    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        {
          name: input,
          completed: false,
          id: crypto.randomUUID(),
        },
      ];
    });
    setInput('');
  }

  // Toggle the completed state of a todo item
  function toggleTodoItem(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }

  // Delete a todo item from the list
  function deleteTodo(id) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      {/* Input */}
      <h1>Simple Todo List</h1>
      <div id='new-todo-form'>
        <label htmlFor='todo-input'>New Todo</label>
        <br />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          id='todo-input'
          type='text'
        />
        <br />
        <button onClick={addTodoItem}>Add Todo</button>
      </div>
      <br />
      <br />

      {/* Todo List Items */}
      <ul id='list'>
        {todo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodoItem={toggleTodoItem}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
