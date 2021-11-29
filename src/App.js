import React, { useState, useEffect } from 'react'
import LandingPage from "./components/auth/LandingPage";

import { getUserInfo } from './requests';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import RouteContainer from './components/home/RouteContainer';

function App() {


  const userData = useSelector(state => state.session)

  const dispatch = useDispatch()


  useEffect(() => {


    let userToken = localStorage.getItem('jwt')

    if (userToken) {
      console.log('user has token. Verify if user is actually logged in.')
      getUserInfo()
        .then((data) => {
          if (data) {
            dispatch({ type: 'LOGIN', payload: data.user })
          } else {
            console.log('Invalid token, user is not verified')
          }
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
        <LandingPage />
      }
    </>

  );
}

export default App;
