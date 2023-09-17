import { useReducer } from 'react';

function reducer(count, action) {
  if (action.type === 'increment') {
    return count + 1;
  }

  if (action.type === 'decrement') {
    return count - 1;
  }

  if (action.type === 'reset') {
    return 0;
  }

  if (action.type === 'change–plus-five') {
    return count + action.payload.value;
  }

  if (action.type === 'change–minus-five') {
    return count - action.payload.value;
  }
}

export function Counter({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch({ type: 'increment' })}>+ 1</button>

      <button onClick={() => dispatch({ type: 'decrement' })}>- 1</button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: 'change–plus-five',
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
            type: 'change–minus-five',
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
