import { create } from 'zustand'

const useConversation = create((set) => ({
    conversations: [],
    setConversations: (conversation) => set({conversation}),
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default useConversation