
import React from "react";
import Sidebar from "./Sidebar";
// import Login from "./Login";
import Profile from "./Profile";
import MessageView from "./MessageView";
import search from '../public/search.png';


export default function Home (){
    return (
        <div className="flex bg-slate-200 h-screen">
            <Sidebar/>
            <MessageView/>
            <Profile/>
        </div>
    );
};
