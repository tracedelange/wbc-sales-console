import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DistributorCard from './DistributorCard'
import { getDistributors } from '../../requests'
import { CircularProgress } from '@mui/material'

const DistributorsLanding = () => {

    const dispatch = useDispatch()
    const distributorData = useSelector(state => state.distributors)
    const [distributorArray, setDistributorArray] = useState([])
    const [ready, setReady] = useState(false)


    useEffect(() => {
        getDistributors()
            .then(data => {
                if (data) {
                    dispatch({ type: 'SET_DISTRIBUTORS', payload: data })
                }
            })
    }, [])

    useEffect(() => {

        if (distributorData.distributors.length > 0) {
            setDistributorArray(
                distributorData.distributors.map(item => {
                    return <DistributorCard key={item.id} data={item} />
                })
            )
            setTimeout(()=>{setReady(true)}, 1000)
        }

    }, [distributorData])



    return (
        <div className='sub-section-landing-page'>
            {ready ?
                distributorArray
                :
                <CircularProgress size='10vmin' sx={{ position: 'absolute', top: '40vh' }} />
            }
        </div>
    )
}

export default DistributorsLanding
