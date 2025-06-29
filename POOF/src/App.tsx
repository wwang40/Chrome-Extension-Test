//import { useState, useEffect } from 'react'
//import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Link } from 'react-router'
import { Switch } from './components/ui/switch'
import { Label } from './components/ui/label'
import { useState } from 'react'

function App() {
  const [DIH, toggleDIH] = useState(false)
  //const [DIH_STRING, toggleDIH_String] = useState("OFF")

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
    <div className="bg-[#5a1e1a] min-h-screen flex items-center justify-center">
      <div className="bg-[#2b2b2b] rounded-lg border border-white p-6 w-[400px] space-y-6 shadow-lg">
        
        {/* Project DIH Title */}
        <div className="flex justify-center">
          <Button
            disabled
            className="bg-[#3d3d3d] text-white text-3xl font-bold rounded-lg px-6 py-2 shadow border border-black"
          >
            Project DIH
          </Button>
        </div>

        {/* Toggle Switch */}
        <div className="bg-gray-500 rounded-lg px-4 py-4 space-y-1 flex items-center justify-between">
          <div>
            <Label className="text-white text-md font-medium">Enable DIH</Label>
            <p className="text-gray-300 text-xs">ALLOWS DIH ON SCREEN</p>
          </div>
          <Switch checked={DIH} onCheckedChange={toggleDIH} />
        </div>

        {/* Gatcha Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#3d3d3d] text-white text-2xl font-bold rounded-lg px-10 py-3 shadow border border-black"
          >
            <Link to="/gatcha">GATCHA</Link>
          </Button>
        </div>

        {/* Settings Button */}
        <div className="flex justify-center">
          <Button asChild
            className="bg-[#3d3d3d] text-white text-sm font-bold rounded px-4 py-1 shadow border border-black"
          >
            <Link to="/settings">Settings</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
