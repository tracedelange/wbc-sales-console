import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const AccountSortFilter = () => {

    const filterType = useSelector(state => state.accounts.filterType)
    const dispatch = useDispatch()

    const handleFilterClick = (e) => {
        dispatch({type: 'SET_ACCOUNT_FILTER_TYPE', payload: e.target.id})
        dispatch({type: 'SET_ACCOUNTS_PAGE', payload: 0})
    }

    return (
        <div className='account-sort-filter'>

            <Button onClick={handleFilterClick} id='alphabetical' color={filterType === 'alphabetical' ? 'secondary' : 'primary'} variant='contained'>Alphabetical</Button>
            <Button onClick={handleFilterClick} id='orders' color={filterType === 'orders' ? 'secondary' : 'primary'} variant='contained'>Order Count</Button>


            
        </div>
    )
}

export default AccountSortFilter
