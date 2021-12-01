import { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import ProductAssignmentDropDown from './ProductAssignmentDropDown';
import { updateDistributerProduct } from '../../requests';
import { useDispatch } from 'react-redux';
import { useDispatchDistributors } from '../../actions';

export default function AlertDialog({ open, handleClose, selectedItem }) {


    const products = useSelector(state => state.products)


    const [chosenProduct, setChosenProduct] = useState(null) 

    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [dropDownAnchorEl, setDropDownAnchorEl] = useState(null)

    const handleDropDownOpen = (e) => {
        setDropDownOpen(true)
        setDropDownAnchorEl(e.currentTarget)
    }


    const handleMenuItemClick = (e, chosenProduct) => {
        setChosenProduct(chosenProduct)
        setDropDownOpen(false)
    }

    const handleDropDownClose = () => {
        setDropDownOpen(false)
    }



    const handleAssignmentConfirmation = () => {
        updateDistributerProduct(selectedItem.id, chosenProduct.id)
        .then(data => {
            if (data) {
                console.log(data)
                setChosenProduct({})
                handleClose()
            }
        })

    }

    return (

        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">
                {"Product Assignment"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Each distributor has a different name for our products, so each distributor product needs to be assigned to an existing product.
                </DialogContentText>

                <div className='assignText'>
                    Assign:
                    <p>
                    {selectedItem.name}
                    </p>
                </div>
                <p className='assignText'>
                <Button variant='contained' onClick={handleDropDownOpen}>To: </Button>
                    {chosenProduct ?
                    chosenProduct.product_name
                    :
                    null
                    }
                </p>

                <ProductAssignmentDropDown handleMenuItemClick={handleMenuItemClick} products={products} anchorEl={dropDownAnchorEl} open={dropDownOpen} handleClose={handleDropDownClose} />
            </DialogContent> 
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAssignmentConfirmation} disabled={chosenProduct ? false : true} autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>

    );
}
