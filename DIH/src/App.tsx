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
      <h1>Project DIH</h1>
      <center><p>Digital Interface Homies</p></center>
      <div className="card">

        <button onClick={onclick}>
          CLICK ME!
        </button>
        <p>
          DIH is currently: {DIH_STRING}
        </p>
        
      </div>
    </>
  )
}

export default App
