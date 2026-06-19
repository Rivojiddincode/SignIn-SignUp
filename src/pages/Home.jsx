import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
function Home() {
    let navigate =useNavigate()
    const {user}=useAuth()
  return (
    <div>
        <h1>
            Welcome to  {user?.name}
            <button onClick={()=> navigate("/signup")}>Back login</button>
        </h1>
        </div>
  )
}

export default Home