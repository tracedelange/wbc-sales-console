import React from 'react'
import { Divider } from '@mui/material'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';


const MappingEntry = ({ distributor, foundProduct }) => {

    const navigate = useNavigate()

    const handleAssignmentClick = () => {
        navigate(`/distributors/${distributor.id}/manage`)
    }

    return (
        <>
            <Divider />
            <div className='map-entry'>

                <div className='map-entry-distributor'>
                    {distributor.name}
                </div>
                <ArrowForwardIcon />
                <div className='map-entry-distributor'>
                    {foundProduct ?
                        foundProduct.name
                        :
                        <Button onClick={handleAssignmentClick} variant='contained'>Assign Product!</Button>
                    } 
                </div>
            </div>
        </>
    )
}

export default MappingEntry
