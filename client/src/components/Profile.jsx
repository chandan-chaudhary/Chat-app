import React from "react";

export default function Profile (){
    return(
        <div className={'basis-3/12 flex flex-col justify-center items-center space-y-5 font-bold'}>
            <img className={'w-16 h-16 rounded-full '}
                 src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                 alt={'dog'}/>
            <h1 >PABLO</h1>
            <span>000-000-0000</span>
        </div>
    )
}