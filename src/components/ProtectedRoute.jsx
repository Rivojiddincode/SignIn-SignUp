import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
function ProtectedRoute({children}) {
    const {isAuth}=useAuth()
  return isAuth ? (
   children
  ):(
    <Navigate to="/signin"/>
  )
}

export default ProtectedRoute