import React from 'react'
import { useSelector } from 'react-redux';
import SidebarUser from './SidebarUser';

function ChatCall() {
  const users = useSelector((state)=> state.user.allUsers);
  console.log(users);

  return (
    <div className={"max-h-96 p-2 mt-3  overflow-auto"}>
     {    users.map((user,i)=>(
        <SidebarUser key={i} user ={user} />
    ))}
  </div>
  )
}

export default ChatCall
