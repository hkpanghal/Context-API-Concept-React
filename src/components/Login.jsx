import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
        
    }
  return (
    <div className='flex flex-col gap-2 items-center justify-center p-8 bg-zinc-700 rounded-md shadow-inner shadow-white text-orange-700'>
        <h1>Login</h1>
        <input type="text" placeholder='UserName' value={username} onChange={(e)=>setUserName(e.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit} className='px-4 py2 bg-blue-600 rounded-sm'>Submit</button>
    </div>
  )
}

export default Login