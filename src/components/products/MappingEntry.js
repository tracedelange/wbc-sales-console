import React from 'react'
import { Divider } from '@mui/material'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';
import AddBoxIcon from '@mui/icons-material/AddBox';


const MappingEntry = ({ distributor, foundProducts }) => {

    const navigate = useNavigate()

    const handleAssignmentClick = () => {
        navigate(`/distributors/${distributor.id}/manage`)
    }

    let products = []

    if (foundProducts){
        let productArray = foundProducts.map(item => item.name)
        products = [...productArray]
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
                    {products.length > 0 ?
                        <>      
                           { products.length > 1 ?
                            products.length + ' Products mapped'
                            :
                            products[0]}
                            
                            {/* {foundProduct.name} */}
                            {/* <AddBoxIcon/> */}
                        </>
                        :
                        <Button onClick={handleAssignmentClick} variant='contained'>Assign Product!</Button>
                    }
                </div>
            </div>
        </>
    )
}

export default MappingEntry
