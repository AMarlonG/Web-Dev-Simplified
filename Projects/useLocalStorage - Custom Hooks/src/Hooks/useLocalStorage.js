import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Getting the input value from local storage
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue == null) {
      // If the initialValue is a function, we call it, which is the case for the last name input (see App.js)
      if (typeof initialValue === 'function') {
        return initialValue();
        // If it is not a function, we return the value, which is the case for the first name input (see App.js)
      } else {
        return initialValue;
      }
    } else {
      // Making localStorageValue a javascript value, and not just a JSON object
      return JSON.parse(localStorageValue);
    }
  });

  useEffect(() => {
    // If the input value is undefined, we remove the value from localStorage
    // Key is making sure we are removing the correct value
    if (value === undefined) {
      localStorage.removeItem(key);
      return;
    }
    if (value !== undefined) {
      // Converting the input value to a JSON string
      // We need to do this because localStorage can only store strings
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
  }, [value, key]);

  return [value, setValue];
}
