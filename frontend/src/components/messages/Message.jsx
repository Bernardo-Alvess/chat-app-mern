import useConversation from '../../zustand/useConversation'
import { useAuthContext }  from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime'

const  Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()

  const isMe = message.senderId === authUser._id
  const chatClassName = isMe ? 'chat-end' : 'chat-start'
  const profilePic = isMe ? authUser.profilePic : selectedConversation.profilePic
  const bubbleBgColor = isMe ? 'bg-blue-500' : ''
  const shakeClass = message.shouldShake ? "shake" : ''
  const time = extractTime(message.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
           <div className='w-10 rounded-full'>
                <img alt="avatar" src={`${profilePic}`}/>
            </div> 
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{time}</div>
    </div>
  )
}

export default Message