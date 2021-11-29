import { Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const DistributerProductMapSettings = () => {

    const product = useSelector(state => state.products.selectedProduct)
    const distributors = useSelector(state => state.distributors.distributors)

    console.log(distributors)
    console.log(product)

    return (
        <div className='product-details-distributer-map'>

            <Typography>Distributer Product Mapping</Typography>
            {product.distributer_products.length > distributors.length ?
                <>
                </>
                :
                <>
                    <Typography>WARNING This product is missing maps for the following distributors:</Typography>

                </>
            }

        </div>
    )
}

export default DistributerProductMapSettings
