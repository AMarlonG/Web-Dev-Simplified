export function TodoListItem({ children, isCompleted }) {
  return (
    <>
      <label>
        <input type='checkbox' defaultChecked={isCompleted} />
        {children}
      </label>
    </>
  );
}
