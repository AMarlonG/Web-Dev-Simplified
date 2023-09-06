import { useArray } from './Hooks/useArray';

const INITIAL_ARRAY = [1, 2, 3, 4, 5];
// const INITIAL_ARRAY = () => [1, 2, 3, 4, 5]

function App() {
  const { array, set, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);

  return (
    <>
      <h1>{array.join(', ')}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          alignItems: 'flex-start',
          marginTop: '1rem',
        }}
      >
        <button onClick={() => set([4, 5, 6])}>
          Set array elements to [4, 5, 6]
        </button>

        <button onClick={() => push(4)}>Add 4 to the end</button>

        <button onClick={() => replace(1, 9)}>
          Replace the second element with 9
        </button>

        <button onClick={() => filter((numbers) => numbers < 3)}>
          Keep all numbers less than 3
        </button>

        <button onClick={() => remove(0)}>Remove the first element</button>

        <button onClick={clear}>Clear array</button>

        <button onClick={reset}>Reset array</button>
      </div>
    </>
  );
}

export default App;
