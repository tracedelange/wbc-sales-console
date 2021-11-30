import { Typography } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useNavigate } from 'react-router';

const DistributorCard = ({ data }) => {

    console.log(data)
    const navigate = useNavigate();

    const handleManageProductClick = () => {
        navigate(`/distributors/${data.id}/manage`)
    }

    return (
        <div className='distributor-child'>


            <p className='white-title'>{data.name}</p>

            <Button onClick={handleManageProductClick} variant='contained' sx={{ fontSize: '2vmin' }}>
                {data.unassigned_products.length > 0 ?
                    <FmdBadIcon fontSize={'4vmin'} />
                    :
                    null
                }
                Manage Products
            </Button>
            <Button variant='contained' sx={{ fontSize: '2vmin' }}>View Trends</Button>

            {data.unassigned_products.length > 0 ?
                <p className='unassigned-product-warning'>
                    <FmdBadIcon fontSize={'4vmin'} />
                    {data.unassigned_products.length} Unassigned Products!
                </p>
                :
                null
            }

        </div>
    )
}

export default DistributorCard
