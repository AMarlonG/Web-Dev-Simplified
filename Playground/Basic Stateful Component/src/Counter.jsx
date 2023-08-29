// Three different ways to update state
//  Read this: https://react.dev/reference/react/useState#setstate
// Important for understanding rerendering of components

import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  function handleTheClick() {
    setCounter((currentCount) => currentCount + 1);
  }

  return (
    <>
      <h1 onClick={handleClick}>{counter}</h1>
      <h1 onClick={handleTheClick}>{counter}</h1>
      <h1 onClick={() => setCounter((currentCount) => currentCount + 1)}>
        {counter}
      </h1>
    </>
  );
}
