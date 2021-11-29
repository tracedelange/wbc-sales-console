import React from 'react'
import { useNavigate } from 'react-router-dom'
import SummarizeIcon from '@mui/icons-material/Summarize';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const NavigationSelectionContainer = () => {

    const navigate = useNavigate()

    const handleSelectionClick = (e) => {
        navigate(e.target.id)
    }

    return (
        <div className='route-selection-container'>

            <div className='route-selection' id='reports' onClick={handleSelectionClick}>
                <h1>Reports</h1>
                <SummarizeIcon />
            </div>
            <div className='route-selection' id='accounts' onClick={handleSelectionClick}>
                <h1>Accounts</h1>
                <GroupIcon />
            </div>
            <div className='route-selection' id='products' onClick={handleSelectionClick}>
                <h1>Products</h1>
                <CategoryIcon />
            </div>
            <div className='route-selection' id='distributors' onClick={handleSelectionClick}>
                <h1>Distributors</h1>
                <LocalShippingIcon />
            </div>

        </div>
    )
}

export default NavigationSelectionContainer
