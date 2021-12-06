import React, { useEffect, useState } from 'react'
import { useDispatchSelectedProduct } from '../../../actions'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import OrderGraph from './OrderGraph'
import { getGraphData } from '../../../requests'

const ProductOrdersGraphPage = () => {

    const { id } = useParams()
    const [graphData, setGraphData] = useState({})

    useDispatchSelectedProduct(id)

    useEffect(() => {
        getGraphData(id)
            .then(data => {
                if (data) {
                    setGraphData(data)
                }
            })
    }, [])


    const productData = useSelector(state => state.products.selectedProduct)


    return (
        <div className='full-page'>
            <div className='graph-content-container'>
                {graphData ?
                    <OrderGraph graphData={graphData} data={productData} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default ProductOrdersGraphPage
