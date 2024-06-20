// pages/users.js (or any other appropriate page)
import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from your API route
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/get-users');
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <p>User ID: {user.userId}</p>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
