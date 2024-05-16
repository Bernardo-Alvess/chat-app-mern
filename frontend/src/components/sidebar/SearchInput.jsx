import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [ search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!search) return
    if(search.length < 3){
      return toast.error('Search input must be atleast 3 characters long!')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else toast.error('No such user found')

  }
  return (
    <form className='flex items-ceneter gap-2' onSubmit={handleSubmit}>
        <input type="text" className='input input-bordered rounded-full' placeholder='search'
        value={search}
        onChange={e => setSearch(e.target.value)} />
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
            <IoSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput