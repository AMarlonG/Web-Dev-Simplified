import './styles.css';

function App() {
  return (
    <>
      <h1>Form Validation</h1>
      <form className='form'>
        <div className='form-group-error'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <br />
          <input
            type='email'
            className='input'
            id='email'
            value='test@test.com'
          />
          <div className='msg'>Must end with @webdevsimplified.com</div>
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            className='input'
            id='password'
            value='Password123!'
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
