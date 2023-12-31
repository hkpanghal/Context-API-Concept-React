import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext)

    if(!user) return <h2>Please Login</h2>

    return <h2>Welcome {user.username} <br /> Your Pssword: {user.password}</h2>
}

export default Profile