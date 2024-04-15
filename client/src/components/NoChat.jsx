import React from 'react'
import { useSelector } from "react-redux";


export default function NoChat() {
  const user = useSelector((state)=> state.user.userData);
  return (
    <div className={'basis-6/12 flex flex-col border border-r-3 border-slate-900 justify-center items-center'}>
        <span className='text-3xl font-bold italic'>Hello 👋 {user.user.name}</span>
        <p className='font-bold text-3xl'>Please select a conversation to start chat.</p>
        <i className="text-7xl fa-regular fa-comments"></i>
    </div>
  )
}
