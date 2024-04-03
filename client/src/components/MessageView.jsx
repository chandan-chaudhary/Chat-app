
import React from "react";

export default function MessageView(){
    return (
        <div className={'basis-6/12 flex flex-col border border-r-3 border-slate-900 h-full'}>
            <div className={'flex relative bg-slate-300 h-fit p-4 rounded-lg'}>
                <img className={'w-12 h-12 rounded-full '}
                     src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                     alt={'dog'}/>
                <div className={'absolute bg-slate-100 p-2 rounded-lg right-3 space-x-5'}>
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-video"></i>
                </div>
            </div>
            <div className={'flex flex-col relative h-full'}>
                {/*spinner*/}
                <div className={'animate-spin border-4 absolute left-96  border-slate-700 border-l-slate-200 w-8 h-8 rounded-full'}></div>
                <div className={'flex p-3 font-bold absolute top-80'}>
                    <img className={'w-10 h-10 rounded-full '}
                         src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                         alt={'dog'}/>
                    <p className={' bg-slate-300 rounded-full p-2 ml-4'}>friend message to view into application ...</p>
                </div>
                <div className={'flex p-3 font-bold absolute top-96 right-0'}>
                    <p className={' bg-slate-300 rounded-full p-2 mr-4'}>my message to view on the application ...</p>
                    <img className={'w-10 h-10 rounded-full '}
                       src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                        alt={'dog'}/>
                </div>
            </div>
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
        </div>
    )
}