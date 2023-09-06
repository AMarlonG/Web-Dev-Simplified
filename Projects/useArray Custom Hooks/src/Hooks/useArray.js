import { useState, useCallback } from 'react';

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const push = useCallback((element) => {
    setArray((array) => [...array, element]);
  }, []);

  const replace = useCallback((index, newElement) => {
    setArray((array) => {
      return [...array.slice(0, index), newElement, ...array.slice(index + 1)];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((array) => {
      return array.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((array) => {
      return [...array.slice(0, index), ...array.slice(index + 1)];
    });
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
