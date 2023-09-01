import { useState, useEffect } from 'react';
// useEffect allows for changes (side effects) based on a change in states of this component
// age inside of the array at the end is the dependency array
// It means this useEffect will only run if, and every time, the age state changes
// If the dependency array is empty, then the useEffect will only run the first time the component is rendered
// Side note: If the effect uses a variable from the component, then that variable must be included in the dependency array

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  // Runs only the first time the component is mounted
  useEffect(() => {
    console.log('Hi! This component has been mounted');

    // This is a clean-up function
    // Runs only when the component is un-mounted
    return () => {
      console.log('Bye! This component has been un-mounted');
    };
  }, []);

  // Runs every time the component is rendered
  useEffect(() => {
    console.log('Re-render');
  });

  // Runs every time the component is rendered, but only if the age and name state changes
  useEffect(() => {
    console.log(`My name is ${name}, and I am ${age} years old.`);
  }, [name, age]);

  // Changes the title of the page to the current name state
  useEffect(() => {
    document.title = name;
  }, [name]);

  // Runs every time the name state changes after one second has passed since last key press
  // This can be used inside the useEffect above since both are dependent on the name state
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}.`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <>
      <br />
      <br />
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <button
        onClick={
          age === 0
            ? () => setAge(0)
            : () => setAge((currentAge) => currentAge - 1)
        }
      >
        Decrease age
      </button>
      <span> {age} </span>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        Increase age
      </button>
      <h2>
        My name is {name}, and I am {age} years old.{' '}
      </h2>
    </>
  );
}
