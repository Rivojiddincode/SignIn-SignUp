import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import "./SignIn.sass"

function Signin() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const success = login(name, password)
        if (success) {
            navigate("/")
        } else {
            alert("Wrong credentials")
        }
    }

    return (
        <div className="box">
            <div className="cont signin-cont">
                <form onSubmit={handleSubmit}>
                    <p>SignIn</p>
                    <label>Name
                        <input 
                            type="text"
                            placeholder='Enter your name'
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </label>
                    <label>Password
                        <input 
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>

                    <button type="submit">Login</button>
                </form>

                <p className='switcht-link' onClick={() => navigate('/signup')}>
                    Don't have an account? <span>Sign Up</span>
                </p>
            </div>
        </div>
    )
}

export default Signin
