import React from 'react'
import { useState } from 'react'
import { submitReport } from '../../requests'
import { Button } from '@mui/material'
import ReportsForm from './ReportsForm'
import { useDispatchDistributors } from '../../actions'
import { useDispatch } from 'react-redux'




const ReportsLanding = () => {


    const [selectedFile, setSelectedFile] = useState()
    const [selectedDistributor, setSelectedDistributor] = useState(null)
    const [fileSelected, setFileSelected] = useState(false)
    const [distributor, setDistributor] = useState(1)
    const [submitted, setSubmitted] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const dispatch = useDispatch()


    useDispatchDistributors()


    const handleDistributorChange = (e, newValue) => {

        setSelectedDistributor(newValue)

    }

    const handleSubmitReport = (e) => {
        dispatch({type: 'SET_LOADING_LOCK', payload: true})
        setSubmitted(true)
        submitReport(selectedFile, selectedDistributor)
        .then(data => {
            if (data) {
                setSubmitted(false)
                if (data.processing_stats) {
                        dispatch({type: 'SET_LOADING_LOCK', payload: false})
                        setSuccessMessage('Report successfully uploaded.')
                    } else {
                        setSuccessMessage('Looks like something went wrong.')
                    }
                }
            })
    }

    const handleSelectedFile = (e) => {
        setSelectedFile(e.target.files[0])
    }

    // handleSelectedFile, selectedDistributor, handleDistributorChange, handleSubmitReport

    return (
        <div className='sub-section-landing-page'>
            <ReportsForm
                successMessage={successMessage}
                submitted={submitted}
                handleSelectedFile={handleSelectedFile}
                selectedDistributor={selectedDistributor}
                handleDistributorChange={handleDistributorChange}
                handleSubmitReport={handleSubmitReport}
            />
        </div>
    )
}

export default ReportsLanding


