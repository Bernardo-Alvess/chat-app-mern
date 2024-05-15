import { useState } from "react"
import useConversation from '../zustand/useConversation'
import { toast } from 'react-hot-toast'
const useSendMessage = () => {
    const [ loading, setLoading ] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)
        console.log(message)
        try {
            const OPTIONS = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            }
            const res = await fetch(`api/messages/send/${selectedConversation._id}`, OPTIONS)
            const data = await res.json()
            
            if(data.error){
                throw new Error(data.error)
            }
            
            setMessages([...messages, data.message])

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage