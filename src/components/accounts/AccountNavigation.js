import React from 'react'
import AccountList from './AccountList'
import AccountSearch from './AccountSearch'
import AccountSortFilter from './AccountSortFilter'

const AccountNavigation = () => {
    return (
        <div className='account-navigation'>


            {/* Search function for quickly looking up accounts */}
            {/* Account list sorted alphabetically by default with smart pagination. */}
            <AccountSearch />
            <AccountSortFilter />
            <AccountList />
            



        </div>
    )
}

export default AccountNavigation
