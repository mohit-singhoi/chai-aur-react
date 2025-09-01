
import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      {/* <h2>Hello , Welcome to Background Changer React Project.</h2> */}

      <div className="w-full h-screen  duration-200"

        style={{ backgroundColor: color }}
      >
        <h1 className=" flex flex-wrap text-xl justify-center py-3"><b>Hello, Welcome to Background Changer Project</b></h1>
        <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl ">
            
            <button
            onClick ={()=>setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: " red" }}
            >Red</button>

            <button
             onClick ={()=>setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "  green" }}
            >Green</button>

            <button
             onClick ={()=>setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>

            <button
             onClick ={()=>setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>

            <button
             onClick ={()=>setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >Pink</button>

            <button
             onClick ={()=>setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
            >Brown</button>

            <button
             onClick ={()=>setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >Purple</button>

            <button
             onClick ={()=>setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >Olive</button>

            <button
             onClick ={()=>setColor("teal")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "teal" }}
            >Teal</button>

            <button
             onClick ={()=>setColor("navy")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "navy" }}
            >Navy</button>

            <button
             onClick ={()=>setColor("maroon")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "maroon" }}
            >Maroon</button>

            <button
             onClick ={()=>setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "aqua" }}
            >Aqua</button>

            <button
             onClick ={()=>setColor("lime")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "lime" }}
            >Lime</button>

            <button
             onClick ={()=>setColor("silver")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "silver" }}
            >Silver</button>

            <button
             onClick ={()=>setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >Gray</button>

            <button
             onClick ={()=>setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >Black</button>

            <button
             onClick ={()=>setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg border"
              style={{ backgroundColor: "white" }}
            >White</button>

          </div>

        </div >
      </div>
    </>
  )
}

// export default App
