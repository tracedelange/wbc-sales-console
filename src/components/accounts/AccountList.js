import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AwaitResponseBackdrop from '../distributors/AwaitResponseBackdrop'
import { v4 as uuid_v4 } from "uuid";

const AccountList = () => {

    const displayAccounts = useSelector(state => state.accounts.displayAccounts)
    const page = useSelector(state => state.accounts.scrollPage)
    const accountSearchLock = useSelector(state => state.accounts.accountSearchLock)
    const searching = useSelector(state => state.accounts.searching)
    const selectedAccount = useSelector(state => state.accounts.selectedAccount)
    // const filterType = useSelector(state => state.accounts.filterType)

    const dispatch = useDispatch()

    const handleAccountClick = (e) => {
        dispatch({type: "SET_SELECTED_ACCOUNT", payload: e.target.id})
    }

    const accountArray = displayAccounts.map((item) => {

        return (
            <li onClick={handleAccountClick} id={item.id} className={ item.id == selectedAccount ? 'chosen-account-list-entry' : 'account-list-entry'} key={uuid_v4()}>
                {item.display_name ?
                    item.display_name
                    :
                    item.account_name
                }
            </li>
        )
    })

    const handleScroll = (e) => {

        if (!searching) {
            if (e.target.scrollHeight - e.target.scrollTop === (e.target.clientHeight)) {
                console.log('Fetching next page...')
                dispatch({ type: 'SET_LOADING_LOCK', payload: true })
                dispatch({ type: 'SET_ACCOUNTS_PAGE', payload: page + 1 })
            }
        }
    }




    return (
        <ul className='account-search-results' onScroll={handleScroll}>

            {displayAccounts.length > 0 ?
                accountSearchLock ?
                    null
                    :
                    accountArray
                :
                <h3 className='no-results'>
                    No Accounts Found
                </h3>
            }

        </ul>
    )
}

export default AccountList
