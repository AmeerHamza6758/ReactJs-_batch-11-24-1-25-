// UserCreate.js
import React from 'react';
import UserForm from './User Form';
// import { createUser  } from '../api';

const UserCreate = ({ }) => {
  const [userData, setUserData]=useState({})

  const handleCreateUser  = async (data) => {
    await createUser (data)
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleCreateUser}>
        <label htmlFor="name"></label>
        <input type="text" value={userData.name} id="name" OnChange={(e)=>setUserData(e.target.value)}/>

      </form>
    </div>
  );
};

export default UserCreate;