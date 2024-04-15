import React, { useState } from "react";
import useConversation from "../../utils/conversation";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

export default function MessageInput(){
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const {messages, setMessages, selectedConversation} = useConversation();
    const user = useSelector((state)=> state.user.userData);

    const handleSendMessage = async ()=>{
        setLoading(true);
        try{
            if(!message) {
                toast.error('please type to send a mesage');
            }
            const sendMessage = await axios.post(`http://127.0.0.1:5500/api/message/send/${selectedConversation?._id}`,{
                message,
            },{
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            });
            setMessages([...messages, sendMessage.data]);
            console.log(sendMessage);
            // console.log(messages)

        }catch (err){
            console.log(err);
            // toast.error(err.response.data.error);
        }finally{
            setLoading(false);
            setMessage('');
        }
    }
    return (
        <div className={'flex w-full h-fit text-2xl items-center rounded-lg p-3  bg-gradient-to-r from-pink-400 to-fuchsia-400'}>
            <input type="text" placeholder="Type here" className="input input-bordered w-full text-white" value={message} onChange={(e)=> setMessage(e.target.value)} />
            <div className={'flex flex-row items-end pl-2 space-x-2'}>
                <i className="hover:scale-125 cursor-pointer fa-solid fa-paperclip"></i>
                <i className=" text-blue-600 hover:scale-125 cursor-pointer fa-solid fa-camera"></i>
                {loading ?  <span className="loading loading-spinner loading-md"></span> :
                <i className=" text-teal-700 hover:scale-125 cursor-pointer fa-solid fa-paper-plane" onClick={handleSendMessage}></i> }
            </div>
        </div>
    )
}