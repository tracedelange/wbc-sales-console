import React from 'react'
import { useState } from 'react'
import { submitReport } from '../../requests'
import { Button } from '@mui/material'


const ReportsLanding = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [selectedDistributor, setSelectedDistributor] = useState(null)
    const [fileSelected, setFileSelected] = useState(false)
    const [distributor, setDistributor] = useState(1)

    const handleDistributorChange = (e) => {
        console.log(e.target.value)
        setSelectedDistributor(e.target.value)

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

    return (
        <div>
            <h1>Reports Landing Page</h1>
            <input type='file' name='report' onChange={handleSelectedFile} />
            <input type='number' value={selectedDistributor} onChange={handleDistributorChange} />
            <Button variant='contained' onClick={handleSubmitReport} >Submit Report</Button>
        </div>
    )
}

export default ReportsLanding


