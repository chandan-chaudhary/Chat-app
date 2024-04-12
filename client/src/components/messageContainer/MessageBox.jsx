import React from "react";

import Message from "./Message";

export default function MessageBox(){
    return(
        <div className={'flex flex-col px-2 overflow-auto'}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        </div>
    )
}