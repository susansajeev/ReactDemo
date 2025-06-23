import React, { useEffect, useState } from 'react'
import UserConext from './UserConext'

const UserProvider = ({ children }) => {
    const [user, setUserData] = useState(null)
    const [loading, setLoading] = useState(true); // ✅

    useEffect(() => {
        const savedName = localStorage.getItem('name');
        if (savedName)
            setUserData(savedName);

        setLoading(false);
    }, []);

    const login = (name) => {
        console.log(name)
        setUserData(name)
        localStorage.setItem("name", name)
    }

    const logOut = () => {
        setUserData(null)
        localStorage.removeItem("name")
    }

    const isLoggIn = !!user

    return (
        <UserConext.Provider value={{ user, login, logOut, isLoggIn, loading }}>
            {children}
        </UserConext.Provider >
    )
}

export default UserProvider