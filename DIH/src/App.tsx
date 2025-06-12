import { useState } from 'react'
import './App.css'

function App() {
  const [DIH, toggleDIH] = useState(false)
  const [DIH_STRING, toggleDIH_String] = useState("OFF")

  const onclick = async () => {
          toggleDIH(!DIH)
          if (DIH) {
            toggleDIH_String("OFF")
          }
          else {
            toggleDIH_String("ON")
          }
        };
  
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={onclick}>
          DIH is currently: {DIH_STRING}
        </button>
        <p>
          ({DIH.toString()})
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
