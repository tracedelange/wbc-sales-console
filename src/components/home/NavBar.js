import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router'


const NavBar = () => {

    const navigation = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.session)

    const { pathname } = useLocation()

    const handleLogoutClick = () => {
        localStorage.setItem('jwt', null)
        dispatch({ type: 'LOGOUT' })
    }


    return (
        <div className='navbar'>
            <div className='navigation-buttons'>

                <Button variant='contained' onClick={() => { navigation('/') }}>Home</Button>
                {pathname == '/' ?
                    null
                    :
                    <Button variant='contained' onClick={() => { navigation(-1) }}>Back</Button>
                }
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
