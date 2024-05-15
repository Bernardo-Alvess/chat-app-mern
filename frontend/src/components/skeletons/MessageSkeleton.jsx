
const MessageSkeleton = () => {
  return (
    <div className='chat chat-end'>
        <div className='skeleton chat-image avatar'>
           <div className='skeleton w-10 rounded-full'>
                <img alt="avatar"/>
            </div> 
        </div>
        <div className='skeleton chat-bubble text-white bg-blue-500'></div>
        <div className='skeleton chat-footer opacity-50 text-xs flex gap-1 items-center'></div>
    </div>
  )
}

export default MessageSkeleton