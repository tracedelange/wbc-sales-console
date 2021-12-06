import React, { useState, useEffect } from 'react'
import LandingPage from "./components/auth/LandingPage";

import { getUserInfo } from './requests';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import RouteContainer from './components/home/RouteContainer';

function App() {


  const userData = useSelector(state => state.session)
  const [error, setError] = useState('')

  const dispatch = useDispatch()


  useEffect(() => {


    let userToken = localStorage.getItem('jwt')

    if (userToken) {
      // console.log('user has token. Verify if user is actually logged in.')

      getUserInfo()
        .then((data) => {
          if (data) {
            dispatch({ type: 'LOGIN', payload: data.user })
          } else {
            console.log('Invalid token, user is not verified')
          }
        })
        .catch( (e) => {
          console.log(e)
          setError('Error: Fetch failed to connect to server.')
        })



    } else {
      console.log('user not logged in.')
    }

  }, [])


  return (
    <>
      {userData.username ?
        <RouteContainer />
        :
        <LandingPage error={error} />
      }
    </>

  );
}

export default App;
