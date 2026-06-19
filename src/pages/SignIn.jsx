import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



function Signin() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const success = login(
            email,
            password
        )
        if (success) {
            navigate("/")
        } else {
            alert("Wrong credentials")
        }
    }

    return (
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit} className="">
                    <label className=''>Email
                        <input className='' type="email"
                            placeholder='Email'
                            onChange={(e) =>
                                setEmail(e.target.value)
                            } />
                    </label>
                    <label className=''>Password
                        <input className='' type="password"
                            placeholder='Password'
                            onChange={(e) =>
                                setPassword(e.target.value)
                            } />
                    </label>

                    <button className=''>Login</button>
                </form>

                <p className='' onClick={() => navigate('/signup')}> <span>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Signin