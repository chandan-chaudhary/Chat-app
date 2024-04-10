import React from "react";

export default function MessageInput(){
    return (
        <div className={'flex absolute bottom-0 w-6/12 text-2xl bg-slate-300 items-center rounded-lg p-8'}>
            <input
                className={'rounded-full w-full bg-slate-200 border-2 border-slate-500  px-3 mx-4 outline-none focus:shadow-2xl focus:shadow-slate-900  '}
                name='messagebox' placeholder={'send message..'}/>
            <div className={'flex flex-row space-x-3 pl-10'}>
                <i className=" hover:scale-125 cursor-pointer fa-solid fa-paperclip"></i>
                <i className=" text-blue-600 hover:scale-125 cursor-pointer fa-solid fa-camera"></i>
                <i className=" text-teal-500 hover:scale-125 cursor-pointer fa-solid fa-paper-plane"></i>
            </div>
        </div>
    )
}