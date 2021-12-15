import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAccountDetails } from '../../requests'
import { CircularProgress, Divider, TextField, Box } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import ToolTip from '@mui/material/Tooltip'
import { Button } from '@mui/material';
import { submitAccountChanges } from '../../requests';

const AccountEdit = () => {


    const { id } = useParams()

    const [accountDetails, setAccountDetails] = useState({})
    const [changedAccount, setChangedAccount] = useState({})
    const [dataReady, setDataReady] = useState(false)
    const [changesMade, setChangesMade] = useState(false)
    const [postMessage, setPostMessage] = useState('')

    const navigate = useNavigate()

    useEffect(() => {

        getAccountDetails(id)
            .then(data => {
                if (data) {
                    setAccountDetails(data)
                    setChangedAccount(data)
                    setTimeout(() => {
                        setDataReady(true)
                    }, 750)
                }
            })
    }, [])

    const submitChanges = () => {
        submitAccountChanges(changedAccount, id)
            .then(data => {
                if (data) {
                    setPostMessage('Account successfully updated!')
                    setAccountDetails(data)
                    setChangedAccount(data)
                } else {
                    setPostMessage('Account update failed.')
                }
            })
    }

    const navigateBack = () => {
        navigate(-1)
    }


    const handleButtonClick = (e) => {
        setChangedAccount({
            ...changedAccount,
            'hidden': !changedAccount.hidden
        })
    }

    const handleInputChange = (e) => {
        setChangedAccount({
            ...changedAccount,
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {

        let changeCount = 0
        Object.keys(accountDetails).forEach(key => {
            if (accountDetails[key] !== changedAccount[key]) {
                changeCount += 1
            }
        })
        if (changeCount > 0) {
            setChangesMade(true)
        } else (
            setChangesMade(false)
        )

    }, [changedAccount])


    return (

        <div className='sub-section-landing-page'>
            {dataReady ?

                <div className='manage-account'>
                    {/* <h3 style={flexShrink: 2} >Update Account Information</h3> */}
                    {/* <Divider flexItem orientation='horizontal' variant='middle' /> */}
                    <h2>{changedAccount.account_name}</h2>
                    <Box sx={{ width: '40%', display: 'flex', alignItems: 'center' }}>
                        <ToolTip title={<p className='tool-tip'>An accounts Display Name is what will be shown on the Sales Map.</p>}>
                            <InfoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </ToolTip>
                        <TextField onChange={handleInputChange} id='display_name' inputProps={{ sx: { fontSize: '2vmin' } }} value={changedAccount.display_name} fullWidth label='Display Name' />
                    </Box>
                    <Box sx={{ width: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextField onChange={handleInputChange} id='address' inputProps={{ sx: { fontSize: '2vmin' } }} sx={{ width: '40%' }} value={changedAccount.address} fullWidth label='Address' />
                        <TextField onChange={handleInputChange} id='city' inputProps={{ sx: { fontSize: '2vmin' } }} sx={{ width: '30%' }} value={changedAccount.city} fullWidth label='City' />
                        <TextField onChange={handleInputChange} id='state' inputProps={{ sx: { fontSize: '2vmin' } }} sx={{ width: '10%' }} value={changedAccount.state} fullWidth label='State' />
                    </Box>
                    <Box sx={{ width: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextField type='float' onChange={handleInputChange} id='latitude' inputProps={{ sx: { fontSize: '2vmin' } }} sx={{ width: '30%' }} value={changedAccount.latitude} fullWidth label='Latitude' />
                        <TextField type='float' onChange={handleInputChange} id='longitude' inputProps={{ sx: { fontSize: '2vmin' } }} sx={{ width: '30%' }} value={changedAccount.longitude} fullWidth label='Longitude' />
                    </Box>
                    <Box sx={{ width: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <ToolTip title={<p className='tool-tip'>If set to true, account will be hidden from view on the Sales Map.</p>}>
                            <InfoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </ToolTip>
                        <Button onClick={handleButtonClick} id='hidden' variant='contained'>{"Hidden: " + changedAccount.hidden}</Button>
                    </Box>

                    <Box sx={{ width: '45%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Button variant='contained' onClick={navigateBack}>Cancel</Button>
                        <Button disabled={!changesMade} onClick={submitChanges} variant='contained'>Submit Changes</Button>
                    </Box>




                    {/* <div className='account-details-update'> */}
                    {/* </div> */}
                    <p className='post-submit-text'>{postMessage}</p>
                </div>

                :
                <CircularProgress size='10vmin' sx={{ position: 'absolute', top: '40vh' }} />
            }
        </div>


    )
}

export default AccountEdit
