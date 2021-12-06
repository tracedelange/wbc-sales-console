import React from 'react'
import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'

const ProductAccountsContainer = () => {

    const product = useSelector(state => state.products.selectedProduct)

    console.log(product)

    return (
        <div className='product-accounts-container'>
            <h1>Account Details</h1>
            <Divider variant='middle' />
            


            
        </div>
    )
}

export default ProductAccountsContainer
