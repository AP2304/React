import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_=+{}[]|\/:`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)
    }

  }, [length, numberAllowed, charAllowed, setPassword])

  const copytoclip = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
    }, [password])
  

  useEffect(() => {
    passGen()
  }, [length, numberAllowed, charAllowed, passGen])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md px-4 py-4 my-8 rounded-lg text-black bg-orange-400">
      <h1 className="text-black text-center my-3 text-2xl">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passRef}/>
        <button onClick={copytoclip} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={5} max={20} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}} /><label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumber((prev) => !prev);}}/>
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1"><input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => {setChar((prev) => !prev)}}/>
      <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App