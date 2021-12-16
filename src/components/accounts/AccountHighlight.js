import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getAccountDetails, submitAccountChanges } from '../../requests'
import { Button, Divider, TextField } from '@mui/material'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AccountHighlight = () => {

    const selectedAccount = useSelector(state => state.accounts.selectedAccount)

    const [displayNameQuickAdd, setDisplayNameQuickAdd] = useState('')
    const [displayNameQuickAddActive, setDisplayNameQuickAddActive] = useState(false)
    const [selectedAccountData, setSelectedAccountData] = useState({})
    const [dataReady, setDataReady] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()


    useEffect(() => {
        if (selectedAccount) {
            setDataReady(false)
            setDisplayNameQuickAddActive(false)
            getAccountDetails(selectedAccount)
                .then(data => {
                    if (data) {
                        setSelectedAccountData(data)
                        setTimeout(() => {
                            setDataReady(true)
                        }, 750)
                    }
                })
        }
    }, [selectedAccount])

    const handleQuickAddChange = (e) => {
        setDisplayNameQuickAdd(e.target.value)
    }
    
    const handleQuickAddSubmit = (e) => {
        e.preventDefault()
        submitAccountChanges({display_name: displayNameQuickAdd}, selectedAccount)
        .then(data => {
            if (data) {
                console.log(data)
                setDisplayNameQuickAddActive(false)
                setDisplayNameQuickAdd('')
                setSelectedAccountData(data)
                dispatch({type: 'REMOVE_ACCOUNT_FROM_FILTERED_LIST', payload: selectedAccount})
            }
        })
    }

    const handleNavigation = (e) => {

        navigate(`/accounts/${selectedAccount}/${e.target.id}`)
    }


    return (
        <div className='account-highlight'>
            {dataReady ?
                <>
                    <h2 className='account-title'>
                        {selectedAccountData.display_name ?
                            selectedAccountData.display_name
                            :
                            <div className='highlight-quick-display-assignment-container'>
                                {displayNameQuickAddActive ?
                                    <form onSubmit={handleQuickAddSubmit} className='quick-add-form'>
                                        <TextField autoFocus value={displayNameQuickAdd} onChange={handleQuickAddChange} fullWidth label='Display Name' />
                                        <Button type='submit' variant='contained'>Submit</Button>
                                    </form>
                                    :
                                    <Button onClick={() => { setDisplayNameQuickAddActive(true) }} variant='contained'>Add Display Name</Button>
                                }
                                {selectedAccountData.account_name}
                            </div>
                        }

                    </h2>
                    <Divider flexItem />
                    <h4>{selectedAccountData.on_premise ? "ON PREMISE" : "OFF PREMISE"} Vendor at {selectedAccountData.address}, {selectedAccountData.city}, {selectedAccountData.state}</h4>

                    <div className='stat-container'>
                        <div>
                            <h1>
                                {selectedAccountData.month_order_count}
                            </h1>
                            <h3>
                                Orders this month
                            </h3>
                        </div>
                        <div>
                            <h1>
                                {selectedAccountData.ytd_order_count}
                            </h1>
                            <h3>
                                Orders Year to Date
                            </h3>
                        </div>

                    </div>
                    <div className='account-button-container'>
                        <Button onClick={handleNavigation} id='details' variant='contained'>View Account Orders</Button>
                        <Button onClick={handleNavigation} id='manage' variant='contained'>Edit Account Information</Button>
                    </div>

                </>
                :

                selectedAccount ?
                    <CircularProgress size='10vmin' sx={{ position: 'absolute', top: '40vh' }} />
                    :
                    <h2>
                        Select an account to view
                    </h2>





            }
        </div>
    )
}

export default AccountHighlight
