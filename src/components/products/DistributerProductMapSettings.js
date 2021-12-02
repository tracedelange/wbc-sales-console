import { Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MappingEntry from './MappingEntry'

const DistributerProductMapSettings = () => {

    const product = useSelector(state => state.products.selectedProduct)
    const distributors = useSelector(state => state.distributors.distributors)

    console.log(distributors)
    console.log(product)

    const distributerProductMapArray = distributors.map(item => {
        // let distributor = distributors.find(subitem => subitem.id === item.distributer_id)
        // let product = product.distributor_products.map((item) => {item.})

        if (product.distributer_products.length < 0) {
            return <MappingEntry key={item.id} distributor={item} product={null} />
        } else {
            let foundProduct = product.distributer_products.find(subitem => subitem.distributer_id === item.id)

            console.log(foundProduct)
            console.log(item)

            if (foundProduct) {
                return <MappingEntry key={item.id} distributor={item} foundProduct={foundProduct} />
            } else {
                return <MappingEntry key={item.id} distributor={item} product={null} />
            }
        }

    })



    return (
        <div className='product-details-distributer-map extra-rules'>

            <h1>Distributer Product Mapping</h1>


            <div className='mapping-container'>
                {distributerProductMapArray}
                <Divider />
            </div>


        </div>
    )
}

export default DistributerProductMapSettings
