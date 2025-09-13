import './App.css'

import React, { useState } from "react"
import UserContext from "./Context/UserContext"
import Login from "./Components/Login"
import Profile from "./Components/Profile"

function App() {
  const [user, setuser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setuser }}>
        <h1>Welcome to MiniContext  Project</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  )
}

export default App
