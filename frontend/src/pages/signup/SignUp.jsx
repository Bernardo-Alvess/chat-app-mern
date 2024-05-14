import { useState } from "react"
import GenderCheckbox from "./GenderCheckbox"
import { Link } from "react-router-dom"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmedPassword: '',
    gender: ''
  })

  const { loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <h1>
        <span className='ml-0 text-blue-500 font-semibold'>Sign Up</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="input input-bordered flex items-center gap-2 my-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="full name" value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value })}/>
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 my-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="username" value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value })}/>
          </label>
        </div>
        <div className="my-3">
          <div>
            <label className="input input-bordered flex items-center gap-2 my-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input type="password" className="grow" placeholder='password' value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value })}/>
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2 my-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input type="password" className="grow" placeholder="confirm password" value={inputs.confirmedPassword} onChange={(e) => setInputs({...inputs, confirmedPassword: e.target.value })}/>
            </label>
          </div>
        </div>

        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}></GenderCheckbox>

        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          Already have an account?
        </Link>
        <button className="btn min-w-full mx-auto font-semibold text-center bg-gray-700" disabled={loading}>
          {loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
        </button>
      </form>

    </div>
  )
}

export default SignUp