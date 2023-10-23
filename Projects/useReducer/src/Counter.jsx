// useReducer is a hook that is used for state management, and is an alternative to useState for more complex state logic, and is preferred over useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

import { useReducer } from 'react';

// The reducer function is going to take in two arguments, the first one is the current state, and the second one is the action that we want to perform on that state.
function reducer(count, action) {
  if (action.type === 'increment_one') {
    return count + 1;
  }

  if (action.type === 'decrement_one') {
    return count - 1;
  }

  if (action.type === 'reset') {
    return 0;
  }

  if (action.type === 'increment_five') {
    return count + action.payload.value;
  }

  if (action.type === 'decrement_five') {
    return count - action.payload.value;
  }
}

export function Counter({ initialCount = 0 }) {
  // useReducer accepts two arguments, the first one is the reducer function, and the second one is the initial state.
  // the dispatch function is what we use to dispatch actions to the reducer function. The dispatch function accepts an action object as an argument, and that action object has a type property that tells the reducer what kind of action we want to perform. See above for the reducer function.
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch({ type: 'increment_one' })}>+ 1</button>

      <button onClick={() => dispatch({ type: 'decrement_one' })}>- 1</button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: 'increment_five',
            payload: {
              value: 5,
            },
          })
        }
      >
        + 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'decrement_five',
            payload: {
              value: 5,
            },
          })
        }
      >
        - 5
      </button>
      <br />

      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
