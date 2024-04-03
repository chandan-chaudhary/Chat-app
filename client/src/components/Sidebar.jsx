import React from "react";

export default function Sidebar (){
    return (
        <div className="basis-3/12  border-r-3 border-slate-600  px-4 py-8">
            <div>
                <input
                    className="text-1xl p-3 text-white-500 font-bold italic rounded-full h-8 border-2 border-gray-700 m-3"
                    name="searchInput" placeholder="Search.."/>
                <i className="text-2xl fa-solid fa-magnifying-glass"></i>
            </div>
            <div
                className={'flex flex-col  rounded-xl max-w-fit text-1xl bg-slate-300  mt-5 justify-items-center align-middle'}>
                <div className={'flex flex-col m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-500 '}>
                    <i className="pl-4 fa-solid fa-comment "></i>
                    <span className={''}>Chats</span>
                </div>
                <div className={'flex flex-col  m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-800 '}>
                    <i className=" pl-4 fa-solid fa-comment"></i>
                    <span className={''}>Updates</span>
                </div>
                <div className={'flex flex-col m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-800'}>
                    <i className=" pl-4 fa-solid fa-phone"> </i>
                    <span className={''}>Calls</span>
                </div>
                <div className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-2 hover:shadow-gray-800'}>
                    <i className="pl-4 fa-solid fa-user"></i>
                    <span className={''}>Contacts</span>
                </div>
                <div className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-2 hover:shadow-gray-800'}>
                    <i className="pl-4 fa-solid fa-wrench"></i>
                    <span className={''}>Settings</span>
                </div>
                <div
                    className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-1 hover:shadow-gray-800'}>
                    <i className="pl-4 fa-solid fa-right-from-bracket"></i>
                    <button className={''}>Logout</button>
                </div>

            </div>
            <div className={'flex flex-col justify-center items-center text-2xl relative -bottom-4 right-28 p-5'}>
                <img className={'w-16 h-16 rounded-full '}
                     src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                     alt={'dog'}/>
                <span className={'font-bold  underline'}>Carlos</span>
            </div>
        </div>
    );
};