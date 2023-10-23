import { useEffect, useReducer } from 'react';
import './styles.css';
import { TodoItem } from './TodoItem';
import { NewTodoForm } from './NewTodoForm';
import { createContext } from 'react';

// Creating a constant to hold the key for the local storage.
const LOCAL_STORAGE_KEY = 'TODOS';

// Creating an object to hold all the actions used in the reducer function.
const ACTIONS = {
  ADD_TODO: 'add_todo',
  UPDATE_TODO: 'update_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
};

// Creating a reducer function.
function reducer(todos, { type, payload }) {
  if (type === 'add_todo') {
    return [
      ...todos,
      { name: payload.name, completed: false, id: crypto.randomUUID() },
    ];
  }

  if (type === 'toggle_todo') {
    return todos.map((todo) => {
      if (todo.id === payload.id)
        return { ...todo, completed: payload.completed };

      return todo;
    });
  }

  if (type === 'delete_todo') {
    return todos.filter((todo) => todo.id !== payload.id);
  }

  throw new Error(`Unhandled action type: ${type}.`);
}

export const TodoContext = createContext();

function App() {
  // Save todos to local storage with useState and useEffect
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoId } });
  }

  return (
    <>
      <h1>Advanced Todo App</h1>

      <TodoContext.Provider
        value={{
          todos,
          addNewTodo,
          toggleTodo,
          deleteTodo,
        }}
      >
        <NewTodoForm />

        <ul id='list'>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </TodoContext.Provider>
    </>
  );
}

export default App;
