import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+?><:{}[]"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

////1st way to copy password to clipboard
// const copyPasswordtoClipboard = useCallback(() => {
//   navigator.clipboard.writeText(Password);
//   passwordRef.current.focus();
//   alert("Password copied to clipboard");
// },[Password])

////2nd way to copy password to clipboard
const copyPasswordtoClipboard = useCallback(() => {
  passwordRef.current?.select();
//  passwordRef.current?.setSelectionRange(0, 6); // For mobile devices
  window.navigator.clipboard.writeText(Password);
  alert("Password copied to clipboard");

},[Password])


  useEffect(() => {
    passwordgenerator()
  }, [length,numberAllowed,charAllowed,passwordgenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full bg-white py-1 px-3'
            placeholder="Password"
            readOnly
            ref ={passwordRef}
          />

          <button
            onClick={copyPasswordtoClipboard}

            className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>


<input
 type="range"
min ={6}
max={100}
value={length}
className='cursor-pointer'
onChange ={(e)=>setLength(e.target.value)}
/>
<label> Length : {length}</label>

          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={(e) =>{ setNumberAllowed((prev) => !prev);

              }}
            />

            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              id='charInput'
              defaultChecked={charAllowed}
              onChange={(e) =>{ setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor='charInput'>Characters</label>

        </div>
      </div>
      </div>
    </>
  )
}

export default App
