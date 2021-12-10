import React, {useState, useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

const AwaitResponseBackdrop = () => {

    const loadingLock = useSelector(state => state.session.loadingLock)
    
    return (
        <Backdrop
        open={loadingLock}
        >
            <CircularProgress size='10vmin' sx={{ position: 'absolute', top: '40vh' }} />
        </Backdrop>
    )
}

export default AwaitResponseBackdrop
