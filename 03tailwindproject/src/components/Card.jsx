import React from 'react'

// function Card(props) {
  // console.log("props",props);
  //console.log("props",props.username);
  function Card(username) {
    console.log("UserName : " ,username);

  return (
   <div className="max-w-xs  rounded-md shadow-md bg-black my-2 mx-auto">
 
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.EQdUU6rbLhQenY-uNL4XKwHaI8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title <br /> {username.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide"> Parmarth Niketan Rishikesh </h2>
        </div>
        <p className="text-gray-300">
         Niketan Ashram stands as a spiritual haven that embodies the essence of yoga, meditation, and holistic wellness. 
         Founded in 1942 by Swami Shivanand Saraswati, this renowned ashram spans 14 acres of tranquil landscape, offering a serene retreat for spiritual seekers from around the world.
         The ashram is particularly famous for its daily Ganga Aarti, ​​a mesmerizing evening ritual where hundreds gather to witness the devotional ceremony with lit lamps, chanting, and prayers.
        </p>
        <button className="  bg-amber-900">Click me</button>
      </div>
  )
}

export default Card