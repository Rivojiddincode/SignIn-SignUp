
import React from 'react'
import { createContext, useContext, useState } from 'react'
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    

    const [isAuth, setIsAuth] = useState(
        localStorage.getItem("isAuth") === "true"
    )

    const signup = (userData) => {
        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        )
    }

    const login = (email, password) => {
       
        const savedUser = JSON.parse(
            localStorage.getItem("user")
        )

        if (
            savedUser?.email === email &&
            savedUser?.password === password
        ) {
            localStorage.setItem("isAuth", "true")
            setUser(savedUser)
            setIsAuth(true)
            return true
        }
        return false
    }

    const logout = () => {
        localStorage.removeItem("isAuth")
        setIsAuth(false)
        setUser(null) 
    }

    return (
        
        <AuthContext.Provider value={{
            user,
            isAuth,
            signup,
            login,
            logout,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
