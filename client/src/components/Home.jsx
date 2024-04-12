
import React from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import MessageView from "./MessageView";
import NoChat from "./NoChat";


export default function Home (){

    const chatSelected = false;
    return (
        <div className="flex bg-gradient-to-r from-purple-400 to-pink-400 h-screen text-black">
            <Sidebar/>
            {chatSelected ? <NoChat /> : <MessageView/> }
            <Profile/>
        </div>
    );
};
