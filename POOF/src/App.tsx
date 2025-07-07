//import { useState, useEffect } from 'react'
//import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Link } from 'react-router'
import { Switch } from './components/ui/switch'
import { Label } from './components/ui/label'
import { useState } from 'react'

function App() {
  const [POOF, togglePOOF] = useState(false)
  //const [POOF_STRING, togglePOOF_String] = useState("OFF")

  // useEffect(() => { //Fetch POOF variable from local storage
  //   chrome.storage.local.get(['POOF'], (result) => {
  //     const POOFValue = result.POOF ?? false; //Default set to false
  //     togglePOOF(POOFValue);
  //     togglePOOF_String(POOFValue ? "ON" : "OFF")
  //   })
  // }, []);

  // const onclick = async () => {
  //         togglePOOF(!POOF)
  //         if (POOF) {
  //           chrome.storage.local.set({POOF: false}, () => {
  //             togglePOOF_String("OFF")
  //             chrome.runtime.sendMessage({ type: 'POOF_UPDATE', value: false });
  //             console.log("POOF set to false");
  //           });
  //         }
  //         else {
  //           chrome.storage.local.set({POOF: true}, () => {
  //             togglePOOF_String("ON")
  //             chrome.runtime.sendMessage({ type: 'POOF_UPDATE', value: true });
  //             console.log("POOF set to true");
  //           });
  //         }
  //       };

return (
    <div className="bg-[#5a1e1a] min-h-screen flex items-center justify-center">
      <div className="bg-[#2b2b2b] rounded-lg border border-white p-6 w-[400px] space-y-6 shadow-lg">
        
        {/* Project POOF Title */}
        <div className="flex justify-center">
          <Button asChild
            className="bg-[#3d3d3d] text-white text-3xl font-bold rounded-lg px-6 py-2 shadow border border-black"
          >
            <Link to='/inventory'>Project POOF</Link>
          </Button>
        </div>

        {/* Toggle Switch */}
        <div className="bg-gray-500 rounded-lg px-4 py-4 space-y-1 flex items-center justify-between">
          <div>
            <Label className="text-white text-md font-medium">Enable POOF</Label>
            <p className="text-gray-300 text-xs">ALLOWS POOF ON SCREEN</p>
          </div>
          <Switch checked={POOF} onCheckedChange={togglePOOF} />
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
