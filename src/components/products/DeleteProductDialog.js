import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { deleteProduct } from '../../requests';
import { useNavigate } from 'react-router';

const DeleteProductDialog = ({ handleClose, open, product }) => {


    const [deleteReady, setDeleteReady] = useState(false)
    const [confirmValue, setConfirmValue] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (confirmValue === product.product_name) {
            setDeleteReady(true)
        } else {
            setDeleteReady(false)
        }
    }, [confirmValue])

    const handleInputChange = (e) => {
        setConfirmValue(e.target.value)
    }

    const handleDeleteConfirm = () => {
        deleteProduct(product.id)
            .then(response => {
                if (response.ok) {
                    navigate('/products')

                }
            })
        handleClose()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to delete product ${product.product_name}?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Use caution! This cannot be undone and may have effects on associated orders.
                </DialogContentText>
                <DialogContentText id="alert-dialog-description">
                    If you're sure, type the name of the product below.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', flexDirection: 'column' }} className='delete-confirmation'>
                <TextField onChange={handleInputChange} fullWidth value={confirmValue} />
                <div>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button disabled={!deleteReady} onClick={handleDeleteConfirm} autoFocus>
                        Confirm
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteProductDialog
