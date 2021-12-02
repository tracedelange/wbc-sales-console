import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from './ProductListItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

const ProductList = () => {


    const navigate = useNavigate()
    const products = useSelector(state => state.products.products)
    const productArray = products.map(item => <ProductListItem key={item.id} data={item} />)

    const navigateToNewProduct = () => {
        navigate('/products/new')
    }

    return (
        <div className='product-list-container'>
            <div className='product-list-header'>
                <Button disabled={true} variant='contained'>View All</Button>
                <h1>Create, View, Update or Delete Products</h1>
                <Button variant='contained' onClick={navigateToNewProduct}>Create New</Button>

            </div>
            <ul className='product-list'>
                {productArray}
            </ul>
        </div>
    )
}

export default ProductList
