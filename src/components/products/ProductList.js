import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from './ProductListItem'
import { Button } from '@mui/material'

const ProductList = () => {

    const products = useSelector(state => state.products.products)
    const productArray = products.map(item => <ProductListItem key={item.id} data={item} />)

    return (
        <div className='product-list-container'>
            <div className='product-list-header'>
                <Button disabled={true} variant='contained'>View All</Button>
                <h1>Create, View, Update or Delete Products</h1>
                <Button variant='contained'>Create New</Button>

            </div>
            <ul className='product-list'>
                {productArray}
            </ul>
        </div>
    )
}

export default ProductList
