import './App.css'

function App() {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);
  }

  return (
    <>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='name' id="" /> <br />
        <input type="text" name="email" placeholder='email' id="" /> <br />
        <input type="submit" value='add user' id="" />
      </form>

    </>
  )
}

export default App
