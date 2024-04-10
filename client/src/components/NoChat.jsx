import React from 'react'

export default function NoChat() {
  return (
    <div className={'basis-6/12 flex flex-col border border-r-3 border-slate-900 h-full justify-center items-center'}>
        <span className='text-3xl font-bold italic'>Hello Chandan</span>
        <p className='font-bold text-3xl'>Please select a conversation to start chat.</p>
        <i className="text-7xl fa-regular fa-comments"></i>
    </div>
  )
}
