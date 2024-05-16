import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/getRandomEmoji'
import useListenConversations from '../../hooks/useListenConversations'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  useListenConversations()
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, index) => {
        return <Conversation
        key={conversation._id}
        conversation={conversation}
        lastIndex={index == conversations.length - 1}
        emoji={getRandomEmoji()}
        />
      })}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Conversations