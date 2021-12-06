import React from 'react'
import { useState } from 'react'
import { submitReport } from '../../requests'
import { Button } from '@mui/material'
import ReportsForm from './ReportsForm'
import { useDispatchDistributors } from '../../actions'

const ReportsLanding = () => {


    const [selectedFile, setSelectedFile] = useState()
    const [selectedDistributor, setSelectedDistributor] = useState(null)
    const [fileSelected, setFileSelected] = useState(false)
    const [distributor, setDistributor] = useState(1)


    useDispatchDistributors()


    const handleDistributorChange = (e, newValue) => {

        console.log(newValue)
        setSelectedDistributor(newValue)

    }

    const handleSubmitReport = (e) => {
        // console.log(selectedFile)
        submitReport(selectedFile, selectedDistributor)
        .then(data => {
            if (data){
                console.log(data)
            }
        })
    }

    const handleSelectedFile = (e) => {
        setSelectedFile(e.target.files[0])
    }

    // handleSelectedFile, selectedDistributor, handleDistributorChange, handleSubmitReport

    return (
        <div className='sub-section-landing-page'>
            <ReportsForm handleSelectedFile={handleSelectedFile} selectedDistributor={selectedDistributor} handleDistributorChange={handleDistributorChange} handleSubmitReport={handleSubmitReport} />
            {/* <h1>Reports Landing Page</h1>
            <input type='file' name='report' onChange={handleSelectedFile} />
            <input type='number' value={selectedDistributor} onChange={handleDistributorChange} />
            <Button variant='contained' onClick={handleSubmitReport} >Submit Report</Button> */}
        </div>
    )
}

export default ReportsLanding


