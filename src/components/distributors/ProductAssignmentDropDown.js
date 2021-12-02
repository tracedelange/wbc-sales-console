import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProductAssignmentDropDown = ({ open, handleClose, anchorEl, products, handleMenuItemClick }) => {


    const menuItemArray = products.products.map(item => <MenuItem key={item.id} onClick={(e) => { handleMenuItemClick(e, item) }}> {item.product_name} </MenuItem>)
    const navigate = useNavigate()


    const handleNewProductClick = () => {
        navigate('/products/new')
    }




    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ overflowY: "auto" }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem
                onClick={handleNewProductClick}
                sx={{
                    backgroundColor: 'black',
                    transition: 'all 0.25s',
                    '&:hover': {
                        backgroundColor: '#C64033'
                    }
                }}>
                <p className='new-product'>Create New Product</p>
            </MenuItem>
            {menuItemArray}
        </Menu>
    )
}

export default ProductAssignmentDropDown
