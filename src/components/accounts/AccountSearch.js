import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getAccountsByPage, getAccountsBySearch } from '../../requests'

const AccountSearch = () => {

    const [searchInput, setSearchInput] = useState('')
    const [searchActive, setSearchActive] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchInput !== '') {
            dispatch({ type: 'SET_SELECTED_ACCOUNT', payload: null })
            dispatch({ type: 'SET_ACCOUNT_SEARCHING', payload: true })
            const timer = setTimeout(() => {
                console.log('Search!')
                dispatch({ type: 'SET_ACCOUNT_LOADING_LOCK', payload: true })

                getAccountsBySearch(searchInput)
                    .then(data => {
                        if (data) {
                            dispatch({ type: 'SET_ACCOUNTS', payload: data })
                            dispatch({ type: 'SET_ACCOUNT_LOADING_LOCK', payload: false })
                        }
                    })


            }, 1000);
            return () => clearTimeout(timer);
        } else {
            if (searchActive) {
                dispatch({ type: 'SET_ACCOUNT_SEARCHING', payload: false })
                const timer = setTimeout(() => {
                    dispatch({ type: 'SET_ACCOUNT_LOADING_LOCK', payload: true })
                    getAccountsByPage(0)
                        .then(data => {
                            if (data) {
                                dispatch({ type: 'SET_ACCOUNTS', payload: data })
                                dispatch({ type: 'SET_ACCOUNTS_PAGE', payload: 0 })
                                dispatch({ type: 'SET_ACCOUNT_LOADING_LOCK', payload: false })
                            }
                        })
                }, 1000);
                return () => clearTimeout(timer);
            }
        }
    }, [searchInput]);

    const handleTextFieldChange = (e) => {
        setSearchInput(e.target.value)
        setSearchActive(true)
    }

    return (
        <>
            <TextField InputProps={{ sx: { fontSize: '2vmin' } }} InputLabelProps={{ sx: { fontSize: '2vmin' } }} onChange={handleTextFieldChange} value={searchInput} label='Search Accounts' fullWidth />

        </>


    )
}

export default AccountSearch
