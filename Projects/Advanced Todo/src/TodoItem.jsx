// This component creates a new todo item, and is responsible for rendering the todo item. The list of todo items is rendered in the TodoList component.
// It also uses the useContext hook to get the toggleTodo, deleteTodo, and updateTodoName functions from the TodoContext, and creates the button handlers for the Edit and Delete buttons.
// The edit button handler sets the isEditing state to true, which renders the form to edit the todo item.

import { useContext, useState } from 'react';
import { TodoContext } from './App';
import { useRef } from 'react';

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodoName } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (nameRef.current.value === '') return;

    updateTodoName(id, nameRef.current.value);
    setIsEditing(false);
  }

  return (
    <li className='list-item'>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input autoFocus type='text' defaultValue={name} ref={nameRef} />
          <button data-button-edit>Save</button>
        </form>
      ) : (
        <>
          <label className='list-item-label'>
            <input
              checked={completed}
              type='checkbox'
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
