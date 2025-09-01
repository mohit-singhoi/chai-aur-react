// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/Card'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Welcome to Talwindcss</h1>
//       <Card> </Card>
//     </>
//   )
// }

// export default App

import './App.css'
import Card from './components/Card'

import React from 'react'
export default function App() {

  // let myobj={
  //   name:"Parmarth Niketan Rishikesh",
  //   info:"Niketan Ashram stands as a spiritual haven that embodies the essence of yoga, meditation, and holistic wellness. Founded in 1942 by Swami Shivanand Saraswati, this renowned ashram spans 14 acres of tranquil landscape, offering a serene retreat for spiritual seekers from around the world. The ashram is particularly famous for its daily Ganga Aarti, ​​a mesmerizing evening ritual where hundreds gather to witness the devotional ceremony with lit lamps, chanting, and prayers."
  // }

  // let myarr=[1,2,3,4,5,6,7,8,9]


  return (
    <div>
      <h1 className=' flex items-center justify-center   bg-pink-400 text-black  p-2 rounded-lg'>Welcome to Parmarth Niketan Rishikesh</h1>
      <div className="max-w-xs  rounded-md shadow-md bg-black my-2 mx-auto">
        </div>
        {/* <Card username ="ChaiAurCode" someobj={myarr}/> */}
               
                <Card username ="ChaiAurCode"/>
        <Card/>
    </div>
  )
}
