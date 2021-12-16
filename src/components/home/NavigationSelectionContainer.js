import React from 'react'
import { useNavigate } from 'react-router-dom'
import SummarizeIcon from '@mui/icons-material/Summarize';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useDispatchWarnings } from '../../actions';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useSelector } from 'react-redux'
import { Tooltip } from '@mui/material';

const NavigationSelectionContainer = () => {

    const navigate = useNavigate()

    const handleSelectionClick = (e) => {
        navigate(e.target.id)
    }

    useDispatchWarnings()

    const warnings = useSelector(state => state.warnings.warnings)
    console.log(warnings)

    return (
        <div className='route-selection-container'>

            <div className='route-selection' id='reports' onClick={handleSelectionClick}>
                <h1>Reports</h1>
                <SummarizeIcon />
            </div>
            <div className='route-selection' id='accounts' onClick={handleSelectionClick}>
                {warnings.accounts_without_display_names > 0 ?
                    <Tooltip className='warning-icon' title={<p className='warning-text'>{warnings.accounts_without_display_names} accounts need display names</p>} placement='top'>
                        <FmdBadIcon color='secondary' className='warning-icon' fontSize={'10px'} />
                    </Tooltip>
                    :
                    null
                }
                <h1>Accounts</h1>
                <GroupIcon />
            </div>
            <div className='route-selection' id='products' onClick={handleSelectionClick}>
                <h1>Products</h1>
                <CategoryIcon />
            </div>

            <div className='route-selection' id='distributors' onClick={handleSelectionClick}>
                {warnings.unassigned_products > 0 ?
                    <Tooltip className='warning-icon' title={<p className='warning-text'>{warnings.unassigned_products} unassigned distributor products!</p>} placement='top'>
                        <FmdBadIcon color='secondary' className='warning-icon' fontSize={'10px'} />
                    </Tooltip>
                    :
                    null
                }
                <h1>Distributors</h1>
                <LocalShippingIcon />
            </div>

        </div>
    )
}

export default NavigationSelectionContainer
