import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setuser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setuser({ username, password })  // update context
  }

 return (
  <div className="login-container">
    <h2 className="login-title">🔐 Login</h2>

    <input
      type="text"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter Username"
    //   className="login-input"
    />
    <br /> <br />

    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter Password"
    //   className="login-input"
    />
    <br />
    <br />

    <button onClick={handleSubmit}   style={{
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }}>
      <div>Submit</div>
    </button>
  </div>
);



  
}

export default Login
