// UserEdit.js
import React from 'react';
import UserForm from './User Form';
import { updateUser } from '../api';

const UserEdit = ({ user }) => {
    const handleUpdateUser = async (updatedUser) => {
        await updateUser(user.id, updatedUser);
    };

    return (
        <div>
            <h2>Edit User</h2>
        </div>
    );
};

export default UserEdit;