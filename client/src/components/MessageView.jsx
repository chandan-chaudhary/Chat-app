
import React from "react";
import MessageBox from "./messageContainer/MessageBox";
import MessageTop from "./messageContainer/MessageTop";
import MessageInput from "./messageContainer/MessageInput";

export default function MessageView(){
    return (
        <div className={'basis-6/12 flex flex-col  border border-r-3 border-slate-900 h-screen max-h-screen'}>
            <MessageTop />
            <MessageBox />
            <MessageInput />
        </div>
    )
};