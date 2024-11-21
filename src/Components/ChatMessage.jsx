import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center  shadow-sm rounded-lg p-1 '>
        <img className='rounded-full' src="https://yt4.ggpht.com/LcQpVlgM0kf-GZh-X5LAcK8pNxgxfnX-_Mnrbaby3r-GPaQ69njIh-pu06lqDww36Mc8XQBoGMI=s32-c-k-c0x00ffffff-no-rj" alt="" />
        <span className='font-bold px-4'>{name}</span>
        <span>{message}</span>
        
    </div>
    
    
  )
}

export default ChatMessage