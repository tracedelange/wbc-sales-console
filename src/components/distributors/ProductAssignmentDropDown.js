import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

const ProductAssignmentDropDown = ({ open, handleClose, anchorEl, products, handleMenuItemClick }) => {


    const menuItemArray = products.products.map(item => <MenuItem key={item.id} onClick={(e) => {handleMenuItemClick(e, item)}}> {item.product_name} </MenuItem> )

    


    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menuItemArray}
        </Menu>
    )
}

export default ProductAssignmentDropDown
