import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"
import { io } from "socket.io-client"

const useListenConversations = () => {
    const { conversations, setConversations } = useConversation()
    const { socket } = useSocketContext()

    console.log('testeee')

    useEffect(() => {
        socket?.on("newConversation", (newConversation) => {
            setConversations([...conversations, newConversation])
        })

        return () => socket?.off("newConversation")
    }, [socket, setConversations, conversations])
}

export default useListenConversations