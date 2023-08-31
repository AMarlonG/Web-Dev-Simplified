import { useState, useEffect } from 'react';
// useEffect allows for changes (side effects) based on a change in states of this component
// age inside of the array at the end is the dependency array
// It means this useEffect will only run if, and every time, the age state changes
// If the dependency array is empty, then the useEffect will only run the first time the component is rendered

export function UseEffect() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
