import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getSpecificProduct, getDistributors } from '../../requests'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import DistributerProductMapSettings from './DistributerProductMapSettings'

const ProductDetailsPage = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const [productLoaded, setProductLoaded] = useState(false)
    const product = useSelector(state => state.products.selectedProduct)
    const distributors = useSelector(state => state.distributors.distributors)


    useEffect(() => {
        if (distributors.length < 1) { //in the case of page reload or direct page navigation, we should populate store with distributor data.
            getDistributors()
            .then(data => {
                if (data) {
                    dispatch({type: 'SET_DISTRIBUTORS', payload: data})
                }
            })    
        }
        getSpecificProduct(id)
            .then(data => {
                if (data) {
                    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: data })
                    setTimeout(() => {
                        setProductLoaded(true)
                    }, 1000);
                }
            })
    }, [])


    return (

        <div className='product-details-page'>
            {productLoaded ?
                <div className='product-details-container'>
                    <h2>
                        {product.product_name}
                    </h2>
                    <div className='product-details-main'>
                        <div className='product-details-numbers'></div>
                        <div className='product-details-accounts'></div>

                        {/* <DistributerProductMapSettings /> */}
                    </div>
                </div>
                :
                <CircularProgress size='10vmin' sx={{position: 'absolute', top: '40vh'}}/>
            }

        </div>
    )
}

export default ProductDetailsPage
