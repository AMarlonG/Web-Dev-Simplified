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
