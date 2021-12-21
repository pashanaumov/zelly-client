import React, { useEffect, useState } from 'react';
import db from '../firebase.config';

interface User {
  age: number;
  jobTitle: string;
  name: string;
  userId: number;
}

export function FirebaseFetcher() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const response = db.collection('users');
    const data = await response.get();
    data.docs.forEach((snapshot) => {
      setUsers((prevUsers) => [...prevUsers, snapshot.data() as User]);
    });
  }

  const kate: User = {
    name: 'Kate',
    age: 22,
    jobTitle: 'Banker',
    userId: 22,
  };

  async function addUser() {
    await db.collection('users').add(kate);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div
      style={{
        padding: 8,
        border: '1px solid black',
        width: '300px',
      }}
    >
      {Boolean(users.length) &&
        users.map((user, id) => {
          return (
            <div
              key={id}
              style={{
                border: '1px solid black',
              }}
            >
              <p>{user.userId}</p>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.jobTitle}</p>
            </div>
          );
        })}
      <button onClick={addUser}>Click to add new users</button>
    </div>
  );
}
