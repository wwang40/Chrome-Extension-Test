import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // const [DIH, toggleDIH] = useState(false)
  const [DIH_STRING, toggleDIH_String] = useState("OFF")

  // useEffect(() => { //Fetch DIH variable from local storage
  //   chrome.storage.local.get(['DIH'], (result) => {
  //     const dihValue = result.DIH ?? false; //Default set to false
  //     toggleDIH(dihValue);
  //     toggleDIH_String(dihValue ? "ON" : "OFF")
  //   })
  // }, []);

  // const onclick = async () => {
  //         toggleDIH(!DIH)
  //         if (DIH) {
  //           chrome.storage.local.set({DIH: false}, () => {
  //             toggleDIH_String("OFF")
  //             chrome.runtime.sendMessage({ type: 'DIH_UPDATE', value: false });
  //             console.log("DIH set to false");
  //           });
  //         }
  //         else {
  //           chrome.storage.local.set({DIH: true}, () => {
  //             toggleDIH_String("ON")
  //             chrome.runtime.sendMessage({ type: 'DIH_UPDATE', value: true });
  //             console.log("DIH set to true");
  //           });
  //         }
  //       };

  return (
    <>
      <div>
      </div>
      <h1 className='text-red-500'>Project DIH</h1>
      <center><p>Digital Interface Homies</p></center>
      <div className="card">
        
        <button onClick={() => DIH_STRING === "OFF" ? toggleDIH_String("ON"):toggleDIH_String("OFF")}>
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
