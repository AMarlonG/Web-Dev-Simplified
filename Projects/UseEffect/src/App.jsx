import { Child } from './Child';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const childComponent = show ? <Child /> : null;
  return (
    <>
      <h1>useEffect project</h1>
      {/* Emulates re-mounting. See Child component for related useEffects */}
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show / Hide
      </button>
      {childComponent}
    </>
  );
}

export default App;
