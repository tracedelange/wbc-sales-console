import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@mui/material'

const ProductNumbersCard = () => {


    const product = useSelector(state => state.products.selectedProduct)


    return (
        <>
            <div className='product-numbers-card'>
                <h1>Product at a Glance</h1>
                <Divider flexItem />
                <div className='number-card'>
                    {product.month_order_count}
                    {product.month_order_count === 1 ? " order in the last 30 days" : " orders in the last 30 days"}
                </div>
                <Divider flexItem />
                <div className='number-card'>
                    {product.ytd_order_count}
                    {product.ytd_order_count === 1 ? " order year to date" : " orders year to date"}
                </div>
                <Divider flexItem />
                <div className='number-card'>
                    {product.order_count}
                    {product.order_count === 1 ? " order all time" : " orders all time"}
                </div>
                <Divider flexItem />
                <div className='number-card'>
                    {product.order_percentage_of_total}% of all orders
                </div>

            </div>
        </>
    )
}

export default ProductNumbersCard
