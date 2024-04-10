import React from 'react'

export default function ChatBox() {
  return (
    <div className={' w-full p-2 mt-3 justify-items-center overflow-auto'}>
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
  )
}
