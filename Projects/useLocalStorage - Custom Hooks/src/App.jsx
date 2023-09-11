// useLocalStorage is used for simple data storage in the browser, such as a user's name or preferences, dark mode, todo list, input values, etc.
// It is cleared when the browser cache is cleared, so it is not suitable for sensitive data or data that needs to be stored for a long time, such as authentication tokens.

import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [firstName, setFirstName] = useLocalStorage('FIRST_NAME', '');
  const [lastName, setLastName] = useLocalStorage('LAST_NAME', () => {
    return 'Default';
  });
  const [hobbies, setHobbies] = useLocalStorage('HOBBIES', [
    'Board Games',
    'Calisthenics',
    'Dancing',
  ]);

  return (
    <>
      <h1>useLocalStorage</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '1rem',
          alignItems: 'start',
          marginBottom: '1rem',
        }}
      >
        <label>First Name</label>
        <input
          type='text'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label>Last Name</label>
        <input
          type='text'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, 'New Hobby'])
        }
      >
        Add Hobby
      </button>
      <div>{hobbies.join(', ')}</div>
    </>
  );
}

export default App;
