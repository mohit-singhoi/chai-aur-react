import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 5;

  // const addvalue =() =>{
  //   setCounter(prevCounter => prevCounter + 1);
  //   setCounter(prevCounter => prevCounter + 1);
  //   setCounter(prevCounter => prevCounter + 1);
  //   setCounter(prevCounter => prevCounter + 1);
  // }



  const addvalue = () => {
    console.log("clicked",counter);
    //counter = counter + 1;
    if(counter<20)
    setCounter(counter+1)
   
  }

    const removeValue = () => {
    console.log("clicked",counter);
    //counter = counter + 1;
    if(counter>0)
    setCounter(counter-1)
   
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
       
       <button
       onClick={addvalue}
       >Add Value</button> <br />
        <button
        onClick={removeValue}
        >Remove Value</button>

        <p>Updated Value : {counter}</p>
    </>
  )
}

export default App
