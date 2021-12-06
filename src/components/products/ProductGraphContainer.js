import React from 'react'
import { useSelector } from 'react-redux'

const ProductGraphContainer = () => {


    const productData = useSelector(state => state.products.selectedProduct)


    console.log(productData)

    return (
        <div>
            
        </div>
    )
}

export default ProductGraphContainer
