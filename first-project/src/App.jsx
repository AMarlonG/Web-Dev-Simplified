import { MyName } from './MyName';
import { PropPlay } from './PropPlay';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';

function App() {
  return (
    <div>
      <MyName />
      <TodoList />
      <PropPlay name='Marlon' age={30} gender='m' />
      <TodoListItem isCompleted={true}>Learn React</TodoListItem>
    </div>
  );
}
export default App;
