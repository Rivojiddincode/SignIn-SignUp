
import React from 'react'
import { createContext, useContext, useReducer } from 'react'
import { authReducer } from '../reducer/Redusers'
const AuthContext = createContext()
const initialState={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isAuth:localStorage.getItem("isAuth") === "true"

}
export const AuthProvider = ({ children }) => {
    

const [state, dispatch] = useReducer(authReducer, initialState)

  

    const signup = (userData) => {
        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        )
    }

    const login = (name, password) => {
       
        const savedUser = JSON.parse(
            localStorage.getItem("user")
        )

        if (
            savedUser?.name === name &&
            savedUser?.password === password
        ) {
            localStorage.setItem("isAuth", "true")
          dispatch({ type: "LOGIN", payload: savedUser })
            return true
        }
        return false
    }

    const logout = () => {
        localStorage.removeItem("isAuth")
        dispatch({ type: "LOGOUT" })
    }

    return (
        
        <AuthContext.Provider value={{
            user: state.user,
           isAuth: state.isAuth,
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
