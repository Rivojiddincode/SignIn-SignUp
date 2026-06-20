import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./Home.sass"
function Home() {
    let navigate =useNavigate()
    const {user}=useAuth()
  return (
    <div className='home'>
        <h1>
            Welcome to  {user?.name}
            <button onClick={()=> navigate("/signin")}>Back login</button>
        </h1>
        </div>
  )
}

export default Home