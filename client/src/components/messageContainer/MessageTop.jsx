

import React from "react";
import useConversation from "../../utils/conversation";

export default function MessageTop(){
    const {selectedConversation} = useConversation();
    // console.log('messageTop',selectedConversation);
    return (
        <div className={'flex relative bg-gradient-to-r from-pink-400 to-fuchsia-400 p-4 rounded-lg'}>
                <img className={'w-12 h-12 rounded-full '}
                    src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                    alt={'dog'}/>
                       <div className="flex-row font-bold ml-3">
                    <span className=" items-center">{selectedConversation.name}</span>
                    <div className="chat-footer opacity-50">
                    online
                    </div>
            </div>
            <div className={'absolute bg-slate-100 p-2 rounded-lg right-3 space-x-5'}>
                <i className="fa-solid fa-phone"></i>
                <i className="fa-solid fa-video"></i>
            </div>
        </div>
    )
}