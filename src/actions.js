import { getDistributors, getProducts } from "./requests"
import { useDispatch } from "react-redux"
import {useEffect} from 'react'


export const useDispatchProducts = () => {
    
    const dispatch = useDispatch()


    useEffect(()=>{

        getProducts()
        .then(data => {
            if (data) {
                dispatch({type: 'SET_PRODUCTS', payload: data})
            }
        })


    },[])
}


export const useDispatchDistributors = () => {
    
    
    const dispatch = useDispatch()

    console.log('distributor state refreshed')

    useEffect(()=>{
        getDistributors()
        .then(data => {
            if (data) {
                dispatch({type: 'SET_DISTRIBUTORS', payload: data})
            }
        })
    },[])


}