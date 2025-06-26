//import { useState, useEffect } from 'react'
import { useState } from 'react'
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
      <div className="bg-gray-800 w-sm h-80" id='button_block'>
      <center><p className='bg-gray-600 border-white border-2 text-4xl ml-6 mr-6 mb-32 mt-16' id='home_page_title'>Digital Interface Homies</p></center>
      <div>
        
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300'id='enable_dih' onClick={() => DIH_STRING === "OFF" ? toggleDIH_String("ON"):toggleDIH_String("OFF")}>
          CLICK ME!
        </button>
        <p>
          DIH is currently: {DIH_STRING}
        </p>
        </div>
      </div>
    </>
  )
}

export default App
