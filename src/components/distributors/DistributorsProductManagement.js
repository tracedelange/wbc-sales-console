import React, { useEffect, useState } from 'react'
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSpecificDistributor } from '../../requests'
import { CircularProgress } from '@mui/material'
import ProductAssignmentDialog from './ProductAssignmentDialog'
import { Button } from '@mui/material';
import { useDispatchProducts, useDispatchDistributors } from '../../actions';
import AwaitResponseBackdrop from './AwaitResponseBackdrop';

const DistributorsProductManagement = () => {

    const { id } = useParams();
    // const [distributorData, setDistributorData] = useState({})
    const [unassignedProductArray, setUnassignedProductArray] = useState([])
    const [selectedItem, setSelectedItem] = useState({})
    const [ready, setReady] = useState(false)

    const [productAssignmentOpen, setProductAssignmentOpen] = useState(false)

    useDispatchDistributors()
    useDispatchProducts()

    const handleClose = () => {
        setProductAssignmentOpen(false)
        setSelectedItem({})
    }

    const handleItemClick = (e, data) => {
        setSelectedItem(data)
        setProductAssignmentOpen(true)
    }

    const distributorData = useSelector(state => state.distributors)


    useEffect(() => {
        if (distributorData.distributors.length > 0) {
            const data = distributorData.distributors.find(item => item.id == id)
            setUnassignedProductArray(data.unassigned_products.map(item => {
                return (<li
                    key={item.id}
                    className='unassigned-product-list-item'
                    onClick={(e) => handleItemClick(e, item)}

                >
                    {item.name}
                </li>)
            }))

            setTimeout(() => { setReady(true) }, 1000)
        }
    }, [distributorData])


    return (
        <div className='sub-section-landing-page' >

            {ready ?
                <div className='distributer-product-container' >
                    {/* <div className='distributer-product-container-sub-container'></div> */}
                    <AwaitResponseBackdrop />
                    <ProductAssignmentDialog selectedItem={selectedItem} open={productAssignmentOpen} handleClose={handleClose} />
                    <div className='distributer-product-container-sub-container'>
                        <h2>Unassigned Products:</h2>
                        <ul className='unassigned-product-list'>

                            {unassignedProductArray.length > 0 ?
                                unassignedProductArray
                                :
                                <div className='no-unassigned'>
                                    No products to assign!
                                </div>
                            }
                        </ul>

                    </div>

                </div>
                :
                <CircularProgress size='10vmin' sx={{ position: 'absolute', top: '40vh' }} />
            }
        </div>
    )
}

export default DistributorsProductManagement
