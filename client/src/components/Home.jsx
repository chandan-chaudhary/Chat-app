
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import MessageView from "./MessageView";
import NoChat from "./NoChat";
import useConversation from "../utils/conversation";



export default function Home (){
    const {selectedConversation, setSelectedConversation} = useConversation();




    useEffect(()=>{
        return  ()=> setSelectedConversation(null);
    },[setSelectedConversation]);

    return (
        <div className="flex bg-gradient-to-r from-purple-400 to-pink-400 min-h-screen text-black">
            <Sidebar/>
            {selectedConversation ? <MessageView/> : <NoChat /> }
            <Profile/>
        </div>
    );
};
