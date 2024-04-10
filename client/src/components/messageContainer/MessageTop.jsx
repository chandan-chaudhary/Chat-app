

import React from "react";

export default function MessageTop(){
    return (
        <div className={'flex relative bg-slate-300 h-fit p-4 rounded-lg'}>
            <img className={'w-12 h-12 rounded-full '}
                 src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                 alt={'dog'}/>
            <div className={'absolute bg-slate-100 p-2 rounded-lg right-3 space-x-5'}>
                <i className="fa-solid fa-phone"></i>
                <i className="fa-solid fa-video"></i>
            </div>
        </div>
    )
}