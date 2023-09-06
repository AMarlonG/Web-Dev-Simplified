import { useEffect, useState } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // The best way to use fetch is inside of a useEffect hook
  useEffect(() => {
    // Resetting the data to the default values
    setData(undefined);
    setIsError(false);
    setIsLoading(true);

    // Creating a new AbortController object
    const controller = new AbortController();

    // Every time the url changes, this function (fetch) will be called.
    // See the dependency array at the bottom
    fetch(url, { signal: controller.signal, ...options })
      .then((response) => {
        // If the response is ok, then return the data as json
        if (response.ok) {
          return response.json();
        }
        // If the response is not ok, then return the response
        return Promise.reject(response);
      })
      // If the data is returned, then set the data in state
      .then(setData)

      // If there is an error, then catch the error
      .catch((error) => {
        //   If the error is coming from the abort function, then ignore it and return (exit the catch block), because we're inside a new fetch request
        // 'AbortError' is the default signal (.name) sent from the cleanup function controller.abort() below
        if (error.name === 'AbortError') return;
        // If there is a different error (400, etc.), then set the isError state to true
        setIsError(true);
      })
      // The finally block will always run, even if there is an error
      .finally(() => {
        // If the fetch request is aborted, we're inside a new fetch request, so return (exit the finally block)
        if (controller.signal.aborted) return;
        // If the fetch request is finished, then set the isLoading state to false
        setIsLoading(false);
      });

    return () => {
      // This is a cleanup function, and will abort the fetch request if a new request is made before the previous one is finished
      // This is done to prevent the data from being overwritten
      controller.abort();
    };
  }, [url]);

  // This is where the information of the useEffect hook is returned
  // This information is set in state. See at the top of the function
  return { data, isError, isLoading };
}
