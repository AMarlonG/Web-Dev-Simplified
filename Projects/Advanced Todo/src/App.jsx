import { useEffect, useReducer, useState } from 'react';
import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import { createContext } from 'react';
import { TodoList } from './TodoList';
import { TodoFilterForm } from './TodoFilterForm';

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

  if (type === 'update_todo') {
    return todos.map((todo) => {
      if (todo.id === payload.id) return { ...todo, name: payload.name };
      return todo;
    });
  }

  throw new Error(`Unhandled action type: ${type}.`);
}

export const TodoContext = createContext();

function App() {
  const [filterName, setFilterName] = useState('');

  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);

  // Save todos to local storage with useState and useEffect
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;
    return JSON.parse(value);
  });

  const filteredTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) return false;
    return todo.name.includes(filterName);
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

  function updateTodoName(todoId, name) {
    dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: todoId, name } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoId } });
  }

  return (
    <>
      <h1>Advanced Todo App</h1>

      <TodoContext.Provider
        value={{
          todos: filteredTodos,
          addNewTodo,
          toggleTodo,
          updateTodoName,
          deleteTodo,
        }}
      >
        <TodoFilterForm
          name={filterName}
          setName={setFilterName}
          hideCompleted={hideCompletedFilter}
          setHideCompleted={setHideCompletedFilter}
        />

        <NewTodoForm />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
