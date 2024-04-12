import React from "react";

export default function MessageInput(){
    return (
        <div className={'flex absolute bottom-0 w-6/12 text-2xl items-center rounded-lg p-3  bg-gradient-to-r from-pink-400 to-fuchsia-400'}>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <div className={'flex flex-row space-x-2 pl-10'}>
                <i className=" hover:scale-125 cursor-pointer fa-solid fa-paperclip"></i>
                <i className=" text-blue-600 hover:scale-125 cursor-pointer fa-solid fa-camera"></i>
                <i className=" text-teal-500 hover:scale-125 cursor-pointer fa-solid fa-paper-plane"></i>
            </div>
        </div>
    )
}