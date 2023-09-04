import { useState, useEffect } from 'react';
import { Users } from './Users.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setUsers(undefined);

    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then(setUsers)
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Users List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => {
            return <Users name={user.name} key={user.id} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
