import React from 'react'
import Login from './Login'


const LandingPage = ({error}) => {

    return (
        <div>
            <Login />
            <div className='landing-error-text'>
                {error}
            </div>
        </div>
    )
}

export default LandingPage
