import { useEffect, useState } from 'react';
import { Users } from './Users';

export function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then(setUsers)
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>User List</h1>
      {loading ? (
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
