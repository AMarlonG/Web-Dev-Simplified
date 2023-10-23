import { useRef } from 'react';

export function NewTodoForm({ addNewTodo }) {
  const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (nameRef.current.value === '') return;

    addNewTodo(nameRef.current.value);

    nameRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit} id='new-todo-form'>
      <label htmlFor='todo-input'>New Todo</label>
      <input type='text' id='todo-input' ref={nameRef} />
      <button>Add Todo</button>
    </form>
  );
}
