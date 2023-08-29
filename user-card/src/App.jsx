import { UserCard } from './UserCard';
import './user.css';
import user from './user.json';

function App() {
  return (
    <>
      <UserCard {...user} />
    </>
  );
}

export default App;
