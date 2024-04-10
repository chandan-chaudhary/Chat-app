
import React from 'react';
import ChatBox from './ChatBox';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import {processError, processStart, logout} from '../../redux/userSlice'


export default function SideMenu() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
    // console.log('sideview',user);
    const handleLogout = async()=>{
        try{
            dispatch(processStart())
            const logoutUser = await axios.post('http://127.0.0.1:5500/api/auth/logout');
            dispatch(logout());
            console.log(logoutUser);
            logoutUser && window.location.replace('/login');
        }catch(err){
            console.log(err);
            toast.error(err.response.data.error);
            dispatch(processError(err.response.data.error));
        }
    }
  return (
    <div className={'flex mt-5 bg-slate-300 rounded-xl  h-fit'}>
                <div
                    className={'flex flex-col  w-fit text-1xl   justify-items-center'}>
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
                        <button className={''} onClick={handleLogout}>Logout</button>
                    </div>
                    <div
                        className={'flex flex-col justify-center items-center text-2xl relative p-5'}>
                        <img className={'w-16 h-16 rounded-full '}
                             src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                             alt={'dog'}/>
                        <span className={'font-bold  underline'}>{user ? user.user.name : ''}</span>
                    </div>
                </div>
                <ChatBox />
            </div>
  )
}
