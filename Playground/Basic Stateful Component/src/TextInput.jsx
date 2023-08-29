import { useState } from 'react';

export function TextInput() {
  const [name, setName] = useState('Your name please ...');

  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(n) => setName(n.target.value)}
      />
    </>
  );
}
