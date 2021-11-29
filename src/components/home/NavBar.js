import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


const NavBar = () => {

    const navigation = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.session)

    const handleLogoutClick = () => {
        localStorage.setItem('jwt', null)
        dispatch({ type: 'LOGOUT' })
    }


    return (
        <div className='navbar'>
            <div>

                <Button variant='contained' onClick={()=>{navigation('/')}}>Home</Button>
            </div>
            <div>

                <h1>Welcome, {userData.username}</h1>
            </div>
            <div>

                <Button variant='contained' onClick={handleLogoutClick}>LOGOUT</Button>
            </div>
        </div>
    )
}

export default NavBar
