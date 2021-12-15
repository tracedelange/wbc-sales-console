import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getAccountDetails } from '../../requests'
import { Button, Divider } from '@mui/material'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AccountHighlight = () => {

    const selectedAccount = useSelector(state => state.accounts.selectedAccount)

    const [selectedAccountData, setSelectedAccountData] = useState({})
    const [dataReady, setDataReady] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {
        if (selectedAccount) {
            setDataReady(false)
            getAccountDetails(selectedAccount)
                .then(data => {
                    if (data) {
                        setSelectedAccountData(data)
                        setTimeout(()=>{
                            setDataReady(true)
                        }, 750)
                    }
                })
        }
    }, [selectedAccount])



    const handleNavigation = (e) => {

        navigate(`/accounts/${selectedAccount}/${e.target.id}`)
    }


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
                        <Button onClick={handleNavigation} id='details' variant='contained'>View Account Orders</Button>
                        <Button onClick={handleNavigation} id='manage' variant='contained'>Edit Account Information</Button>
                    </div>

                </>
                :

                selectedAccount ? 
                <CircularProgress size='10vmin' sx={{position: 'absolute', top: '40vh'}}/>
                :
                <h2>
                    Select an account to view
                </h2>





            }
        </div>
    )
}

export default AccountHighlight
