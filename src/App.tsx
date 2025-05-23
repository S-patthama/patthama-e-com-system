import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>E-com System 1.0.0 (add login page)(update shopping cart)</h1>
      <h2>create a sign up ui form</h2>
      <h3>implement the register new user api</h3>
      <h4>test create to Jira</h4>
      <h5>AEC-5 test</h5>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>test job build</p>
      <p>test need lint before build</p>
      <p>test need lint before build222</p>
      <p>test-action-deploy</p>
    </>
  )
}

export default App
