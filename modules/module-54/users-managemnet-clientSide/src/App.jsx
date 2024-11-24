import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUsers = [...users, user];
        setUsers(newUsers)
      })
  }
  return (
    <>

      <h1>users managemnet</h1>
      <p>total users: {users.length}</p>
      <form onSubmit={handleSubmit}>
        <h2>create user</h2>
        <input type="text" name="name" placeholder='Name' id="" /> <br />
        <input type="text" name="email" placeholder='email' id="" /> <br />
        <input type="submit" value="Submit" />
      </form>

    </>
  )
}

export default App
