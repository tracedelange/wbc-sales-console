import React from 'react'
import { Button, Tooltip } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useDispatchWarnings } from '../../actions';

const AccountSortFilter = () => {

    useDispatchWarnings()

    const warnings = useSelector(state => state.warnings.warnings)
    const filterType = useSelector(state => state.accounts.filterType)
    const dispatch = useDispatch()

    const handleFilterClick = (e) => {
        dispatch({ type: 'SET_ACCOUNT_FILTER_TYPE', payload: e.target.id })
        dispatch({ type: 'SET_ACCOUNTS_PAGE', payload: 0 })
    }




    return (
        <div className='account-sort-filter'>

            <Button onClick={handleFilterClick} id='alphabetical' color={filterType === 'alphabetical' ? 'secondary' : 'primary'} variant='contained'>Alphabetical</Button>
            <Button onClick={handleFilterClick} id='orders' color={filterType === 'orders' ? 'secondary' : 'primary'} variant='contained'>Order Count</Button>
            {warnings.accounts_without_display_names > 0 ?
                <Tooltip placement='top' title={warnings.accounts_without_display_names + ' accounts need display names'}>
                    <Button onClick={handleFilterClick} id='display_name' color={filterType === 'display_name' ? 'secondary' : 'primary'} variant='contained'>
                        <FmdBadIcon />
                    </Button>
                </Tooltip>
                :
                null
            }


        </div>
    )
}

export default AccountSortFilter
