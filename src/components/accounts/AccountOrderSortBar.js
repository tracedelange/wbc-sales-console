import React from 'react'
import { Button } from '@mui/material'

const AccountOrderSortBar = () => {
    return (
        <div className='account-order-list-sort-bar'>
            <Button variant='contained'>Sale Date</Button>
            <Button variant='contained'>Product Name</Button>
        </div>
    )
}

export default AccountOrderSortBar
