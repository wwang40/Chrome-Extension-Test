import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [POOF, togglePOOF] = useState(false)
  const [POOF_STRING, togglePOOF_String] = useState("OFF")

  useEffect(() => { //Fetch POOF variable from local storage
    chrome.storage.local.get(['POOF'], (result) => {
      const POOFValue = result.POOF ?? false; //Default set to false
      togglePOOF(POOFValue);
      togglePOOF_String(POOFValue ? "ON" : "OFF")
    })
  }, []);

  const onclick = async () => {
          togglePOOF(!POOF)
          if (POOF) {
            chrome.storage.local.set({POOF: false}, () => {
              togglePOOF_String("OFF")
              chrome.runtime.sendMessage({ type: 'POOF_UPDATE', value: false });
              console.log("POOF set to false");
            });
          }
          else {
            chrome.storage.local.set({POOF: true}, () => {
              togglePOOF_String("ON")
              chrome.runtime.sendMessage({ type: 'POOF_UPDATE', value: true });
              console.log("POOF set to true");
            });
          }
        };
  
  return (
    <>
      <div>
      </div>
      <h1>Project POOF</h1>
      <center><p>Digital Interface Homies</p></center>
      <div className="card">

        <button onClick={onclick}>
          CLICK ME!
        </button>
        <p>
          POOF is currently: {POOF_STRING}
        </p>
        
      </div>
    </>
  )
}

export default App
