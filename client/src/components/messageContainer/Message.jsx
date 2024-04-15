import React from "react";
import { useSelector } from "react-redux";


export default function Message(message){
    // const {message :message}= message
    const user = useSelector((state)=> state.user.userData);
    // console.log('message',message.message, user.user._id);
    const fromMe = message.message.sender === user.user._id ? 'chat-end' : 'chat-start';
    const setBgColor = fromMe === 'chat-end' ? 'bg-pink-300 text-white' : '';
    const dateNow =new Date( Date.now()).toLocaleDateString(navigator.language, {day:'numeric'});
    const sentDay = new Date(message.message.createdAt).toLocaleDateString(navigator.language, {day:'numeric'});
    const sentTime  = new Date(message.message.createdAt).toLocaleTimeString(navigator.language,{hour:'numeric', minute:'numeric'});

    // find date of msg sent
    const selectDay = (sentDay, dateNow, sentTime)=>{
        if(sentDay === dateNow){
            return 'Today '+ sentTime;
        } else if (sentDay === JSON.stringify(dateNow-1)){
            return 'Yesterday '+ sentTime;
        }else {
            const date = new Date(message.message.createdAt).toLocaleDateString(navigator.language, {weekday:'short', day:'2-digit', month:'short', year:'2-digit'})+ " "+  sentTime;
            return date;
        }
    }
    // console.log('atmsg',sentTime, sentDay, dateNow,today, selectDay(sentDay, dateNow, sentTime), JSON.stringify(dateNow-1));

    return (
            <div className={`chat ${fromMe}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component"
                             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                    </div>
                </div>
                <div className={`chat-bubble ${setBgColor}`}>{message.message.message}</div>
                <div className="chat-footer opacity-50">
                   {selectDay(sentDay, dateNow, sentTime)}
                </div>
            </div>
            // {/* <div className="chat chat-end">
            //     <div className="chat-image avatar">
            //         <div className="w-10 rounded-full">
            //             <img alt="Tailwind CSS chat bubble component"
            //                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
            //         </div>
            //     </div>
            //     <div className="chat-bubble">You underestimate my power!</div>
            //     <div className="chat-footer opacity-50">
            //         Seen at 12:46
            //     </div> */}
            // {/* </div> */}
    )
};

