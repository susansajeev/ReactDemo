import React, { Children, useState } from 'react'
import UserConext from './UserConext'

const UserProvider = ({ children }) => {


    const [user, setUserData] = useState(null)
    const login = (name) => {
        console.log(name)
        setUserData(name)
    }
    const logOut = () => {

        setUserData(null)

    }

    return (
        <UserConext.Provider value={{ user, login, logOut }}>
            {children}
        </UserConext.Provider >
    )
}

export default UserProvider