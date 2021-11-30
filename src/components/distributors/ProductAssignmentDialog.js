import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, handleClose, selectedItem }) {




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

                <p className='assignText'>
                    Assign: {selectedItem.name}
                </p>
                <p className='assignText'>
                    To: {selectedItem.name}
                </p>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>

    );
}
