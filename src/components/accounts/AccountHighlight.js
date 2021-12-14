import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getAccountDetails } from '../../requests'
import { Button, Divider } from '@mui/material'

const AccountHighlight = () => {

    const selectedAccount = useSelector(state => state.accounts.selectedAccount)

    const [selectedAccountData, setSelectedAccountData] = useState({})
    const [dataReady, setDataReady] = useState(false)

    useEffect(() => {
        if (selectedAccount) {
            getAccountDetails(selectedAccount)
                .then(data => {
                    if (data) {
                        setSelectedAccountData(data)
                        setDataReady(true)
                    }
                })
        }
    }, [selectedAccount])


    console.log(selectedAccountData)
    return (
        <div className='account-highlight'>
            {dataReady ?
                <>
                    <h2 className='account-title'>
                        {selectedAccountData.display_name ? selectedAccountData.display_name : selectedAccountData.account_name}
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
                        <Button variant='contained'>View Account Orders</Button>
                        <Button variant='contained'>Edit Account Information</Button>
                    </div>

                </>
                :

                <h2>
                    Selected an Account to view details
                </h2>

            }
        </div>
    )
}

export default AccountHighlight
