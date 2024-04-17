import { createContext, useContext, useEffect, useState } from "react";
import {useSelector}  from 'react-redux';
import io from 'socket.io-client';

 const SocketContext = createContext();

export const useSocketContext =()=>{
   return  useContext(SocketContext);
}

export const SocketProvider = (props)=>{
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const user = useSelector((state)=> state.user.userData);
    // console.log(user);

    useEffect(()=>{
        if(user){
            const socket = io('http://127.0.0.1:5500',{
                query: {
                    userId: user.user._id
                }
            });

        setSocket(socket);
        socket.on('getOnlineUsers',(users)=>{
            setOnlineUsers(users);
        });
            return ()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            };
        }
    },[user]);

    return <SocketContext.Provider value={{socket, onlineUsers}}>{props.children}</SocketContext.Provider>
};