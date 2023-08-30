import { useState } from 'react';

export function CounterWithName() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  return (
    <>
      <h1>Counter With Name</h1>
      <div>
        <button
          onClick={
            age === 0
              ? () => setAge(0)
              : () => setAge((currentAge) => currentAge - 1)
          }
        >
          Decrease
        </button>
        <span> {age} </span>
        <button onClick={() => setAge((currentAge) => currentAge + 1)}>
          Increase
        </button>
      </div>

      <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />

      <h2>
        My name is {name}, and I am {age} years old.
      </h2>
    </>
  );
}

// onClick = {counter === 0 ? () => setCounter(1) : () => setCounter(0)};
