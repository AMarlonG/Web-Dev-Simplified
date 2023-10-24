// This component is responsible for rendering the form to filter the todo items.
// The name and setName props are used to filter the todo items by name, and are sent from the App component. They are derived from the filterName state.
// The hideCompleted and setHideCompleted props are used to filter the todo items by completed status, and are sent from the App component.

export function TodoFilterForm({
  name,
  setName,
  hideCompleted,
  setHideCompleted,
}) {
  return (
    <div className='filter-form'>
      <div className='filter-form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <label>
        <input
          type='checkbox'
          checked={hideCompleted}
          onChange={(event) => setHideCompleted(event.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  );
}
