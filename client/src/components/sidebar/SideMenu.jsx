
import React, { useState} from 'react';
import ChatBox from './SidebarChats';
import LoggedUser from './LoggedUser';
import ChatCall from './SidebarCalls';
import SidebarUpdates from './SidebarUpdates';


export default function SideMenu() {
    const [showComp, setShowComp] = useState('chat');

 const handleComponent =(input)=>{
    if(input === 'chat'){
        setShowComp(input);
    }else if(input === 'call'){
        setShowComp(input);
    }else if( input === 'update'){
        setShowComp(input);
    }
 }
 console.log('show',showComp);
   
  return (
    <div className='mt-5 max-h-screen'>
        <div className={'bg-gradient-to-r from-pruple-300 to-pink-400 rounded-xl '}>
                <div role="tablist" className="font-bold tabs tabs-lifted">
                    <span role="tab" className={`tab ${showComp ==='chat' ?  'tab-active' : 'text-black' }`} onClick={()=>handleComponent('chat')}>Chats</span>
                    <span role="tab" className={`tab ${showComp === 'call' ? 'tab-active' : ' text-black'} `} onClick={()=>handleComponent('call')}>Calls</span>
                    <span role="tab" className={`tab ${showComp === 'update' ? 'tab-active' : ' text-black'}`} onClick={()=>handleComponent('update')}>Updates</span>
                </div>
                {
                   showComp === 'chat' && <ChatBox /> 
                }
                {
                    showComp === 'call' && <ChatCall />
                }
                {
                    showComp === 'update' && <SidebarUpdates /> 
                }
        </div>
        <LoggedUser />
    </div>

  )
}

// /* <div
//                         className={'flex flex-col m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-500 '}>
//                         <i className="pl-4 fa-solid fa-comment "></i>
//                         <span className={''}>Chats</span>
//                     </div>
//                     <div
//                         className={'flex flex-col  m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-800 '}>
//                         <i className=" pl-4 fa-solid fa-comment"></i>
//                         <span className={''}>Updates</span>
//                     </div>
//                     <div
//                         className={'flex flex-col m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-800'}>
//                         <i className=" pl-4 fa-solid fa-phone"> </i>
//                         <span className={''}>Calls</span>
//                     </div>
//                     <div
//                         className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-2 hover:shadow-gray-800'}>
//                         <i className="pl-4 fa-solid fa-user"></i>
//                         <span className={''}>Contacts</span>
//                     </div>
//                     <div
//                         className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-2 hover:shadow-gray-800'}>
//                         <i className="pl-4 fa-solid fa-wrench"></i>
//                         <span className={''}>Settings</span>
//                     </div>
//                     <div
//                         className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-1 hover:shadow-gray-800'}  onClick={handleLogout}>
//                         <i className="pl-4 fa-solid fa-right-from-bracket"></i>
//                         <button className={''}>Logout</button>
//                     </div>
//                     // 