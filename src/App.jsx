import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center p-8 text-white bg-zinc-900 flex-col '>

      <UserContextProvider>

        <Login/>
        <Profile/>

      </UserContextProvider>


    </div>
  )
}

export default App