import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custom App || Chai aur Code</h1>
            <a href="https://www.google.com" target="_blank">Google</a>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://www.youtube.com",
//         target: "_blank",
//         children: " Click me to Visist Google"
//     },

// };

const anotherElement = (
    <a href="https://www.google.com" target="_blank">Google</a>
)

// const anotherElement2 = "Chai aur react"
const reactElement =React.createElement(
    'a',
    {
        href: "https://www.youtube.com",
        target: "_blank",
    },
    // " Click  to Visit Google",
      " Click  to Visit ",
    anotherElement
    // anotherElement2

)


createRoot(document.getElementById('root')).render(
    // <App />
 
    // <MyApp />
    // MyApp()

    // anotherElement
    reactElement
  
)
