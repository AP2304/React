import React, { useState } from 'react'

const App = () => {

const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-2xl">
        <button onClick={() => setColor("red")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("orange")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "orange"}}>Orange</button>
        <button onClick={() => setColor("yellow")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={() => setColor("lime")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "lime"}}>Lime</button>
        <button onClick={() => setColor("green")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("teal")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "teal"}}>Teal</button>
        <button onClick={() => setColor("cyan")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "cyan"}}>Cyan</button>
        <button onClick={() => setColor("blue")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("indigo")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "indigo"}}>Indigo</button>
        <button onClick={() => setColor("violet")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "violet"}}>Violet</button>
        <button onClick={() => setColor("purple")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={() => setColor("fuchsia")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "fuchsia"}}>Fuchsia</button>
        <button onClick={() => setColor("pink")} 
        className="outline-none px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={() => setColor("black")} 
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "black"}}>Black</button>
          </div>
      </div>
    </div>
  )
}

export default App