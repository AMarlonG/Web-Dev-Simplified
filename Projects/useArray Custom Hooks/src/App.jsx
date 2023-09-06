import { useArray } from './Hooks/usearray';

const INITIAL_ARRAY = [1, 2, 3, 4, 5];
// const INITIAL_ARRAY = () => [1, 2, 3, 4, 5];

function App() {
  const { array, set, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);

  return (
    <>
      <div>{array.join(', ')}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '1rem',
          alignItems: 'start',
          marginBlockStart: '1rem',
        }}
      >
        <button onClick={() => set([4, 5, 6])}>Set elements to 4, 5, 6</button>
        <button onClick={() => push(4)}> Add 4 to the end</button>
        <button onClick={() => replace(1, 9)}>
          Replace the second element with 9
        </button>
        <button onClick={() => filter((numbers) => numbers < 3)}>
          Keep array elements less than 3
        </button>
        <button onClick={() => remove(0)}>Remove first element</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
