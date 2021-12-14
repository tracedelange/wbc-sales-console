import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AwaitResponseBackdrop from '../distributors/AwaitResponseBackdrop';


const ReportsForm = ({ successMessage, handleSelectedFile, selectedDistributor, handleDistributorChange, handleSubmitReport, submitted }) => {



    const distributors = useSelector(state => state.distributors.distributors)
    const [disButtonArray, setDisButtonArray] = useState([])



    useEffect(() => {

        if (distributors.length > 0) {
            let array = distributors.map((item) => <ToggleButton key={item.id} value={item.id}>{item.name}</ToggleButton>)
            setDisButtonArray(array)
        }
    }, [distributors])



    return (
        <>
            <div className='reports-form'>
                <h1>Process New Report</h1>
                <input type='file' name='report' id='report' onChange={handleSelectedFile} />
                {/* <label htmlFor='report'> */}
                {/* <Button variant='contained' type='file' sx={{fontSize: '1.5vmin'}} > */}
                {/* Select File */}
                {/* </Button> */}
                {/* </label> */}

                <ToggleButtonGroup
                    color='primary'
                    onChange={handleDistributorChange}
                    exclusive
                    value={selectedDistributor}
                >
                    {disButtonArray}
                </ToggleButtonGroup>
                {/* <input type='number' value={selectedDistributor} onChange={handleDistributorChange} /> */}
                <Button variant='contained' sx={{ fontSize: '1.5vmin' }} onClick={handleSubmitReport} >Submit Report</Button>
                <AwaitResponseBackdrop />
                {submitted ?
                    null
                    :
                    <div>
                        {successMessage}
                    </div>
                }
            </div>
        </>
    )
}

export default ReportsForm
