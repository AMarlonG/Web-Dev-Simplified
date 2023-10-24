// This component is responsible for rendering the list of todo items, and takes the items from TodoItem through the TodoContext.
// It maps over the todo items and renders a TodoItem component for each todo item.

import { useContext } from 'react';
import { TodoContext } from './App';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul id='list'>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}
