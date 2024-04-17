import React ,{useEffect, useRef, useState} from "react";
import { useSelector } from "react-redux";
import useConversation from "../../utils/conversation";
import Message from "./Message";
import axios from "axios";
import toast from "react-hot-toast";
import { useSocketContext } from "../../SocketContext";

export default function MessageBox(){
    const [loading, setLoading] = useState(false);
    const {messages,setMessages, selectedConversation} =useConversation();
    const {socket} = useSocketContext();
    const user = useSelector((state)=> state.user.userData);
    const lastmsgRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            lastmsgRef.current?.scrollIntoView({behaviour: 'smooth'});
        }, 100)
    }, [messages]);


    useEffect(()=>{
        if(!selectedConversation) {
            toast.error('Please select a conversation');
        }
        const getMessages = async() =>{
            setLoading(true);
            try{
                const getMessaegRes = await axios.get(`http://127.0.0.1:5500/api/message/get/${selectedConversation?._id}`,{
                    headers:{
                        Authorization: `Bearer ${user.token}`
                    }
                });
                setMessages(getMessaegRes.data);
                // console.log(getMessaegRes.data, messages);
                // overscroll fails
                // const overScroll = document.getElementById('autoScroll');
                //  console.log(overScroll);
                //  overScroll.scrollIntoView({behavior:'smooth', block:'end'});
            }catch (err){
                console.log(err);
                toast.error(err.message);
            }finally {
                setLoading(false);
            }
        }
        getMessages();
    },[selectedConversation, setMessages, user.token]);

    useEffect(()=>{
        socket?.on('newMessage', (message)=>{
            setMessages([...messages, message]);
        });
        return ()=> socket?.off('newMessage')
    }, [messages, setMessages, socket])

    
    return(
        <div id="autoScroll" className={'flex flex-col px-2 overflow-auto'} ref={lastmsgRef}>
            { loading && ( <div className="flex justify-center items-center "> 
                        <span className="loading loading-ball loading-xs"></span>
                        <span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span>
                        </div>
                ) 
            }
            { !loading && messages.length === 0 ? (
                <p className="flex justify-center items-center text-xl font-bold mt-5">Send message to start conversation</p>
            ) :
           ( messages.map((message)=>(
                <Message key={message._id} message ={message} />
            )))}
        </div>
    )
}