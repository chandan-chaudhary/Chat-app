import React from "react";

export default function Sidebar (){
    return (
        <div className="basis-3/12 border-r-3 border-slate-600  p-4">
            <div className={'bg-slate-700 rounded-lg'}>
                <input
                    className="text-1xl p-3 text-white-500 font-bold italic rounded-full outline-none h-8 border-2 border-gray-700 m-3"
                    name="searchInput" placeholder="Search.."/>
                <i className="text-xl text-gray-400 fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={'flex mt-5 bg-slate-300 rounded-xl  h-fit'}>
                <div
                    className={'flex flex-col  w-fit text-1xl bg-slate-300   justify-items-center'}>
                    <div
                        className={'flex flex-col m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-500 '}>
                        <i className="pl-4 fa-solid fa-comment "></i>
                        <span className={''}>Chats</span>
                    </div>
                    <div
                        className={'flex flex-col  m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-800 '}>
                        <i className=" pl-4 fa-solid fa-comment"></i>
                        <span className={''}>Updates</span>
                    </div>
                    <div
                        className={'flex flex-col m-3 p-2 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow  hover:shadow-gray-800'}>
                        <i className=" pl-4 fa-solid fa-phone"> </i>
                        <span className={''}>Calls</span>
                    </div>
                    <div
                        className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-2 hover:shadow-gray-800'}>
                        <i className="pl-4 fa-solid fa-user"></i>
                        <span className={''}>Contacts</span>
                    </div>
                    <div
                        className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-2 hover:shadow-gray-800'}>
                        <i className="pl-4 fa-solid fa-wrench"></i>
                        <span className={''}>Settings</span>
                    </div>
                    <div
                        className={'flex flex-col m-3 items-center transition duration-100  rounded-full hover:scale-110 hover:shadow p-1 hover:shadow-gray-800'}>
                        <i className="pl-4 fa-solid fa-right-from-bracket"></i>
                        <button className={''}>Logout</button>
                    </div>
                    <div
                        className={'flex flex-col justify-center items-center text-2xl relative p-5'}>
                        <img className={'w-16 h-16 rounded-full '}
                             src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                             alt={'dog'}/>
                        <span className={'font-bold  underline'}>Carlos</span>
                    </div>
                </div>
                <div className={' w-full p-2 mt-3 justify-items-center'}>
                    <div className={'flex flex-row p-1 space-x-4 bg-slate-400 rounded-xl mb-1'}>
                        <img className={'w-8 h-8 rounded-full '}
                             src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                             alt={'dog'}/>
                        <span className={''}>Carlos</span>
                    </div>
                    <div className={'flex flex-row p-1 space-x-4 bg-slate-400 rounded-xl mb-1'}>
                        <img className={'w-8 h-8 rounded-full '}
                             src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                             alt={'dog'}/>
                        <span className={''}>pablo</span>
                    </div>
                    <div className={'flex flex-row p-1 space-x-4 bg-slate-400 rounded-xl mb-1'}>
                        <img className={'w-8 h-8 rounded-full '}
                             src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                             alt={'dog'}/>
                        <span className={''}>xyz</span>
                    </div>
                </div>
            </div>
        </div>
    );
};