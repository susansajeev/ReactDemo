import React, { useMemo, useState, useCallback, useContext } from 'react'
import UserConext from './contexts/UserConext';
import { useNavigate } from "react-router-dom";

const ListUserData = () => {
    const [selectedGroup, setSelectedGroup] = useState("all")
    const navigate = useNavigate();
    const { logOut } = useContext(UserConext)
    const userData = [
        { id: 1, name: 'Alice', group: 'admin' },
        { id: 2, name: 'Bob', group: 'editor' },
        { id: 3, name: 'Charlie', group: 'admin' },
        { id: 4, name: 'David', group: 'viewer' },
        { id: 5, name: 'Rua', group: 'editor' },
        { id: 2, name: 'Susan', group: 'editor' },
        { id: 3, name: 'Sajeev', group: 'admin' },
        { id: 2, name: 'RykaRua', group: 'guest' },
        { id: 3, name: 'laly', group: 'admin' },
        { id: 4, name: 'Sumith', group: 'viewer' },
        { id: 5, name: 'Ryka', group: 'editor' },
    ];
    const filteredList = useMemo(() => {
        console.log("Searching..........")
        if (selectedGroup === "all") {
            return userData
        } else {
            return userData.filter(item => item.group === selectedGroup)
        }

    }, [userData, selectedGroup]);

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(0);

    const logOutclick = () => {
        logOut()
        navigate("/");
    }

    // Without useCallback, this function would be recreated on every render
    const handleClick = useCallback(() => {
        console.log("value ==")
        setClicked(prev => prev + 1);
    }, []); // function will not change across renders
    return (
        <div style={{
            alignItems: 'center',
            height: '100vh',
            margin: '40px'
        }} >
            <ul className="list-group">
                {filteredList.map((user, index) => (
                    <li>{user.name}</li>
                ))}

            </ul>
            <h2>Users by Group</h2>

            <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                style={{ marginBottom: '1rem', padding: '0.5rem' }}
            >
                <option value="all">All</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
                <option value="admin">Admin</option>
            </select>

            <h2>Count: {count}</h2>
            <h2>Clicked: {clicked}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            {/* This won't re-render unless handleClick changes */}
            <button onClick={handleClick} >Click Me</button>
            <button onClick={logOutclick}>Logout</button>
        </div>
    )
}

export default ListUserData