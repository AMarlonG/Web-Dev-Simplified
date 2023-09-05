export function TodoItem({ id, name, completed, toggleTodoItem, deleteTodo }) {
  return (
    <li className='list-item'>
      <label className='list-item-label'>
        <input
          checked={completed}
          type='checkbox'
          data-list-item-checkbox
          onChange={(event) => toggleTodoItem(id, event.target.checked)}
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}
