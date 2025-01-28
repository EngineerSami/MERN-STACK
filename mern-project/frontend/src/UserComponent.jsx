import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch all users from the backend
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
            .then(response => {
                setUsers(response.data);  // Update the state with the fetched users
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserComponent;
