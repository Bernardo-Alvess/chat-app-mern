import { BiLogOut } from "react-icons/bi"
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {

  const { loading, logout } = useLogout()

  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className='w-6 h-6 cursor-pointer text-white' onClick={logout}/>
      ) : (
        <div className='w-6 h-6 animate-spin rounded-full border-2 border-white'/>
      )}
    </div>
  )
}

export default LogoutButton