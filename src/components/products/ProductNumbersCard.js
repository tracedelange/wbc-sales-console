import React from 'react'
import { useSelector } from 'react-redux'
import { Divider } from '@mui/material'

const ProductNumbersCard = () => {


    const product = useSelector(state => state.products.selectedProduct)

    console.log(product)

    return (
        <>
            <div className='product-numbers-card'>
                <h1>Product  at a Glance</h1>
                <Divider flexItem />
                <div className='number-card'>
                    {product.month_order_count}
                    {product.month_order_count === 1 ? " order this month" : " orders this month"}
                </div>
                <Divider flexItem />
                <div className='number-card'>
                    {product.six_month_order_count}
                    {product.six_month_order_count === 1 ? " order over the past six months" : " orders in the last six months"}
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
            </div>
        </>
    )
}

export default ProductNumbersCard
