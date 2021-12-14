import React from 'react'
import AccountHighlight from './AccountHighlight'
import AccountNavigation from './AccountNavigation'
import { Divider } from '@mui/material'
import { useDispatchAccounts } from '../../actions'
import AwaitResponseBackdrop from '../distributors/AwaitResponseBackdrop'

const AccountsLanding = () => {

    useDispatchAccounts()


    return (
        <div className='sub-section-landing-page'>
            {/* <AwaitResponseBackdrop /> */}
            <div className='accounts-landing'>
                <AccountNavigation />
                <Divider orientation='vertical' flexItem />
                <AccountHighlight />
            </div>
        </div>
    )
}

export default AccountsLanding
