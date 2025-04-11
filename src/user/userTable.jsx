// UserList.js
import React, { useEffect, useState } from 'react';
import { deleteUserById, getAllUsers } from '../services/apiController'
const UserList = ({ onEdit }) => {
    const [users, setUsers] = useState([]);
const [loader, setLoader]=useState(false)
    useEffect(() => {
        getUsersData()
    }, [])

    const getUsersData = async () => {
        setLoader(true)
        const response = await getAllUsers()
        setUsers(response.data)
        setLoader(false)
    }

    const handleDelete = async (id) => {
        const dusers = users.filter((user) => user.id !== id)
        alert('Deleted')
        setUsers(dusers)
    };

    if (loader) {
        return (<h1>Loading..........</h1>)
    }

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => onEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;