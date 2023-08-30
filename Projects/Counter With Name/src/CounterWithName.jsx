import { useState, useEffect } from 'react';

export function CounterWithName() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Enter name');

  // This allows for changes (side effects) based on a change in states of this component
  useEffect(() => {
    console.log('useEffect called and age is', age);
  }, [age]);
  // age inside of the array at the end is the dependency array
  // It means this useEffect will only run if, and every time, the age state changes
  // If the dependency array is empty, then the useEffect will only run the first time the component is rendered

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
