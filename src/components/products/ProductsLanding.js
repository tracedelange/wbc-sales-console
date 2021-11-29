import React from 'react'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getProducts} from '../../requests'
import UnassignedProducts from './UnassignedProducts'
import { Divider } from '@mui/material'

const ProductsLanding = () => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(()=> {
        if (products.length < 1) {
            getProducts()
            .then(data => {
                if (data){
                    dispatch({type: 'SET_PRODUCTS', payload: data})
                }
            })
        } 
    }, [])

    return (
        <div className='products-landing-container'>
            <ProductList />
            {/* <Divider orientation='vertical' flexItem /> */}
            {/* <UnassignedProducts /> */}

        </div>
    )
}

export default ProductsLanding
