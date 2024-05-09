import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-ceneter gap-2'>
        <input type="text" className='input input-bordered rounded-full' placeholder='search'/>
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
            <IoSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput