import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('http://localhost:5500/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, [])

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Users Management Server</h1>

    </>
  )
}

export default App
