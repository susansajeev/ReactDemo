import React, { useContext } from 'react'
import UserConext from '../components/contexts/UserConext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { isLoggIn, loading } = useContext(UserConext)
    console.log("Uservslue " + isLoggIn)

    if (loading) return <div>Loading...</div>;

    return isLoggIn ? children : <Navigate to="/" replace />
}

export default ProtectedRoute