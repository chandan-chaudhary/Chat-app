import React from "react";
import SidebarUser from "./SidebarUser";
import toast from "react-hot-toast";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAllUser } from "../../redux/userSlice";


export default function ChatBox() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user.userData);
  // console.log('chatbox',user.token);

  useEffect(() => {
    const handleChatUser = async () => {
      setLoading(true);
      try {
        const chats = await axios.get('http://127.0.0.1:5500/api/user/',{
          headers:{
            Authorization : `Bearer ${user.token}`
          }
        });
        // const chat = await chats.json();
        setUsers(chats.data);
        dispatch(addAllUser(chats.data));
        // console.log('chatbox',chats.data);
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    handleChatUser();
  },[user.token]);

  console.log('chatbox',users);
  return (
    <div className={"max-h-96 p-2 mt-3  overflow-auto"}>
      {loading ?  <span className="loading loading-spinner loading-md"></span>
         : users.map((user,i)=>(
          <SidebarUser key={i} user ={user} />
      ))}
    </div>
  );
}

// <div className={'flex flex-row p-1 space-x-4 bg-slate-400 rounded-xl mb-1'}>
// <img className={'w-8 h-8 rounded-full '}
//      src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
//      alt={'dog'}/>
// <span className={''}>pablo</span>
// </div>
// <div className={'flex flex-row p-1 space-x-4 bg-slate-400 rounded-xl mb-1'}>
// <img className={'w-8 h-8 rounded-full '}
//      src={'https://images.pexels.com/photos/18868283/pexels-photo-18868283/free-photo-of-woman-petting-cute-dog-with-bandana.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
//      alt={'dog'}/>
// <span className={''}>xyz</span>
// </div>
