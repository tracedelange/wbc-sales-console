import React from 'react'
import AccountList from './AccountList'
import AccountSearch from './AccountSearch'

const AccountNavigation = () => {
    return (
        <div className='account-navigation'>


            {/* Search function for quickly looking up accounts */}
            {/* Account list sorted alphabetically by default with smart pagination. */}
            <AccountSearch />
            <AccountList />
            



        </div>
    )
}

export default AccountNavigation
