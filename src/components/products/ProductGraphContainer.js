import { Divider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

const ProductGraphContainer = () => {


    const navigate = useNavigate()
    const productData = useSelector(state => state.products.selectedProduct)

    const handleNavigation = (e) => {
        navigate(`/products/${productData.id}/${e.target.value}`)
    } 

    return (
        <div className='product-details-graph-container'>
            <h1>View Graphs</h1>
            <div className='button-group-graphs'>
                <Divider flexItem variant='middle' />
                <Button onClick={handleNavigation} variant='contained' value='orders' sx={{fontSize: '2vmin'}}>Orders over time</Button>
                <Divider flexItem variant='middle' />
                {/* <Button onClick={handleNavigation} variant='contained' value='accounts' sx={{fontSize: '2vmin'}}>Account Histogram</Button> */}
                {/* <Divider flexItem variant='middle' /> */}
            </div>
        </div>
    )
}

export default ProductGraphContainer
