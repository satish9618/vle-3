import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="navbar">
        <h1>DevOps WebApp</h1>
        <span className="status">● CI Pipeline Active</span>
      </header>

      <main className="hero">
        <div className="badge">Vite + React</div>

        <h2>DevOps CI/CD Testing Page</h2>

        <p>
          This is a sample React application created to test the
          GitHub Actions CI pipeline.
        </p>

        <div className="card">
          <h3>Pipeline Test</h3>

          <p>
            Every push to GitHub should trigger the CI workflow.
          </p>

          <button onClick={() => setCount(count + 1)}>
            Test Counter: {count}
          </button>
        </div>

        <div className="features">
          <div className="feature">
            <h3>✓ Build</h3>
            <p>Vite production build</p>
          </div>

          <div className="feature">
            <h3>✓ Lint</h3>
            <p>Code quality check</p>
          </div>

          <div className="feature">
            <h3>✓ Test</h3>
            <p>CI workflow validation</p>
          </div>
        </div>
      </main>

      <footer>
        <p>DevOps Lab • React Application • CI/CD Testing</p>
      </footer>
    </div>
  )
}

export default App