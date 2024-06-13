import React, { useEffect, useState } from 'react';
import './Home.css';

type User = {
    name: string;
    age: number;
}

type Users = User[];

export const Users = () => {
    const [users, setUsers] = useState<Users | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="Container">
            <div className="Header">Here are the users!</div>
            <div className="Content">
                {
                    loading ? (
                        'Loading...'
                    ) : (
                        <>
                            {users ? users.map((user,index) =>
                                <li key={index}>{user.name} is {user.age} years old</li>) : 'No users found'}
                        </>
                    )}
            </div>
        </div>
    );
}


