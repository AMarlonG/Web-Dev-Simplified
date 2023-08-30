/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

const INITIAL_ARRAY = ['A', 'B', 'C', 'D', 'E'];

export function ArrayStates() {
  const [array, setArray] = useState(INITIAL_ARRAY);
  const [input, setInput] = useState('');

  function removeFirstElement() {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.shift();
      return newArray;
      // Can also be done with slice, but shift is faster and more readable
      //   return prevArray.slice(1);
    });
  }

  function removeLetterB(letter) {
    setArray((prevArray) => {
      return prevArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((prevArray) => {
      return [letter, ...prevArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((prevArray) => {
      return [...prevArray, letter];
    });
  }

  function clearTheArray() {
    setArray([]);
  }

  function resetTheArray() {
    setArray(INITIAL_ARRAY);
  }

  function updateAToH() {
    setArray((prevArray) => {
      return prevArray.map((element) => (element === 'A' ? 'H' : element));
    });
  }

  function addLetterKAtIndexThree(letter, index) {
    setArray((prevArray) => {
      return [...prevArray.slice(0, index), letter, ...prevArray.slice(index)];
    });
  }

  function addInputToStart() {
    setArray((prevArray) => {
      return [input, ...prevArray];
    });
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeLetterB('B')}>Remove Letter B</button>
      <br />
      <button onClick={() => addLetterToStart('B')}>
        Add Letter B To Start
      </button>
      <br />
      <button onClick={() => addLetterToEnd('Z')}>Add Letter Z To End</button>
      <br />
      <button onClick={clearTheArray}>Clear The Array</button>
      <br />
      <button onClick={resetTheArray}>Reset The Array</button>
      <br />
      <button onClick={updateAToH}>Update All A's to H</button>
      <br />
      <button onClick={() => addLetterKAtIndexThree('K', 3)}>
        Add K at Index 3
      </button>
      <br />
      <br />
      <label>Create your own element</label>
      <br />
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <br />
      <button onClick={addInputToStart}>Add the element to the array</button>
      <br />
      <h1>{array.join(', ')}</h1>
    </>
  );
}
