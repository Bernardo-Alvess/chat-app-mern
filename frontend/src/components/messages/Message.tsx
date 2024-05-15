import React from 'react'
import useConversation from '../../zustand/useConversation'

const  Message = () => {
  const { selectedConversation } = useConversation()
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
           <div className='w-10 rounded-full'>
                <img alt="avatar"/>
            </div> 
        </div>
        <div className='chat-bubble text-white bg-blue-500'>}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'></div>
    </div>
  )
}

export default Message