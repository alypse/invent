import React, { useEffect, useState } from 'react';
import './Home.css';


export const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
    
    return (
        <div className="Container">
            <div className="Header">
                <h1>Home</h1>
            </div>
            <div className="Content">
                <ul>
                {users.map((user: any, index: number) => (
                    <li key={index}>{user.name} is {user.age} years old</li>
                ))}
                </ul>
            </div>
        </div>
    );
}


