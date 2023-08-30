import useState from 'react';

export function CounterWithName() {
  //   const [age, setAge] = useState(0);
  //   const [name, setName] = useState('Your Name');

  return (
    <>
      <h1>Counter With Name</h1>
      <div>
        <button>-</button>
        <span>Age</span>
        <button>+</button>
      </div>

      <br />
      <input />
      <h2>My name is name, and I am age years old.</h2>
    </>
  );
}
