 import React from 'react'
 import useConversation from '../../utils/conversation';
 
 export default  function SidebarUser(user) {
    const {selectedConversation, setSelectedConversation} = useConversation();
    // console.log('userII',user);
    const isSelected = selectedConversation?.user?._id === user.user._id;
   return (
    <div className={`flex flex-row p-1 space-x-4 cursor-pointer rounded-xl mb-1 hover:bg-sky-300 ${isSelected ? 'bg-sky-300': ''}`}
     onClick={()=>setSelectedConversation(user)} >
        <div className="avatar online">
            <div className="w-8 h-8 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"   alt=''/>
            </div>
        </div>
        <span className={'font-bold'}>{user.user.name}</span>
        <div className=' divider'></div>
    </div>
   )
 }
 

 