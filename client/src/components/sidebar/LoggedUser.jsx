import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import {processError, processStart, logout} from '../../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux';


function LoggedUser() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
        // HANDLE LOGOUT
        const handleLogout = async()=>{
            try{
                dispatch(processStart())
                const logoutUser = await axios.post('http://127.0.0.1:5500/api/auth/logout');
                dispatch(logout());
                // console.log(logoutUser);
                toast.success(logoutUser.data.message);
            }catch(err){
                console.log(err);
                toast.error(err.response.data.error);
                dispatch(processError(err.response.data.error));
            }
        };
  return (
    <div className={'bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-4 mt-2 font-extrabold space-y-4'}>
        <div className='flex flex-col items-start cursor-pointer' onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <button className='underline'>Logout</button>
        </div>
        <div className=' flex space-x-4 items-center '>
            <img className={'w-16 h-16 rounded-full '}
                    src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                    alt={'dog'}/>
            <span className={'font-bold text-2xl underline'}>{user.user.name}</span>
        </div>
    </div>
  )
}

export default LoggedUser
