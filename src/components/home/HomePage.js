import React from 'react'
import NavigationSelectionContainer from './NavigationSelectionContainer'
import {useEffect} from 'react'
import { getProducts, getDistributors } from '../../requests'
import { useDispatch } from 'react-redux'

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        //On main page load, make a backend fetch and reload stuff / do initial backend load
        getDistributors()
        .then(data => {
            if (data) {
                dispatch({type: 'SET_DISTRIBUTORS', payload: data})
            }
        })

        getProducts()
        .then(data => {
            if (data) {
                dispatch({type: 'SET_PRODUCTS', payload: data})
            }
        })
    },[])


    return (
        <div>
            <NavigationSelectionContainer />
        </div>
    )
}

export default HomePage
