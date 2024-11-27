import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const user = { name, age };

    fetch('http://localhost:5500/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Users Management Server</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' id="" /> <br />
        <input type="text" name="age" placeholder='Age' id="" /> <br />
        <button>Add User</button>
      </form>

    </>
  )
}

export default App
