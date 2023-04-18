import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const PrivateRoute = () => {

  const {currentUser} = useAuth()

  return (
     currentUser?<Outlet/> :<Navigate to="/login" />
  )
}

export default PrivateRoute