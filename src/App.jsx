import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from "./pages/SignUp"
import Signin from "./pages/SignIn"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
function App() {
  return (
    <div>
<Routes>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/' element={
  <ProtectedRoute>
    <Home/>
  </ProtectedRoute>
}/>

</Routes>

    </div>
  )
}

export default App