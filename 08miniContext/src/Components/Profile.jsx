import React,{use, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} =useContext(UserContext)
 if(!user) return <div> <br />Please login</div>

 return  <div> <br />Welcome {user.username}</div>
}

export default Profile