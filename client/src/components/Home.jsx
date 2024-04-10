
import React from "react";
import Sidebar from "./Sidebar";
// import Login from "./Login";
import Profile from "./Profile";
import MessageView from "./MessageView";
import search from '../public/search.png';
import NoChat from "./NoChat";


export default function Home (){

    const chatSelected = true;
    return (
        <div className="flex bg-slate-200 h-screen text-black">
            <Sidebar/>
            {chatSelected ? <NoChat /> : <MessageView/> }
            <Profile/>
        </div>
    );
};
