import React from "react";
interface User {
  id: number;
  name: string;    
}
const UserPage = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await req.json();

  return (
    <div>
      UserPage test
      <ul>
      
        {users.map(user=>  <li>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default UserPage;
