 import React from 'react'
 import useConversation from '../../utils/conversation';
 import { useSocketContext } from '../../SocketContext';
 
 export default  function SidebarUser(user) {
    const {user : singleUser}= user;
    // console.log('userII',users);
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?.user?._id === user.user._id;

    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(singleUser._id);
    console.log('SU',onlineUsers, isOnline, singleUser._id);

   return (
    <div className={`flex flex-row p-1 space-x-4 cursor-pointer rounded-xl mb-1 hover:bg-sky-300 ${isSelected ? 'bg-sky-300': ''}`}
     onClick={()=>setSelectedConversation(singleUser)} >
        <div className={`avatar ${isOnline && 'online'}`}>
            <div className="w-8 h-8 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"   alt=''/>
            </div>
        </div>
        <span className={'font-bold'}>{singleUser.name}</span>
        <div className=' divider'></div>
    </div>
   )
 }
 

 