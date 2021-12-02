import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatchSelectedProduct } from '../../actions'
import { Navigate, useParams } from 'react-router'
import { CircularProgress } from '@mui/material'
import { updateProduct } from '../../requests'
import { useNavigate } from 'react-router'
import DeleteProductDialog from './DeleteProductDialog'

const ProductManagementPage = () => {


    const product = useSelector(state => state.products.selectedProduct)

    const { id } = useParams()
    useDispatchSelectedProduct(id)

    const navigate = useNavigate()
    const [newProductName, setNewProductName] = useState('')
    const [ready, setReady] = useState(false)
    const [readyToSubmit, setReadyToSubmit] = useState(false)

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const handleInputChange = (e) => {
        setNewProductName(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(newProductName)
        let trimmedProduct = newProductName.trim()
        updateProduct(id, trimmedProduct)
        .then(data => {
            if (data) {
                navigate(`/products/${id}`)
            }
        })

    }

    const handleDeleteDialogOpen = () => {
        setDeleteDialogOpen(true)
    }

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false)
    }


    useEffect(()=>{

        if (newProductName === product.product_name || newProductName.trim() === ''){
            setReadyToSubmit(false)
        } else {
            setReadyToSubmit(true)
        }

    },[newProductName])

    useEffect(() => {
        if (product.product_name) {
            setNewProductName(product.product_name)
            setTimeout(()=>{
                setReady(true)
            },750)
        }
    }, [product])

    return (
        <div className='sub-section-landing-page'>
            <div className='product-update-delete-container'>
                <form onSubmit={handleSubmitForm} className='product-update-container'>
                    {ready ?
                        <>
                            <DeleteProductDialog product={product} handleClose={handleDeleteDialogClose} open={deleteDialogOpen} />
                            <div>
                                <h2>Update Product Name:</h2>
                                <TextField value={newProductName} onChange={handleInputChange} fullWidth size='medium' variant='outlined' />
                                <Button disabled={!readyToSubmit} type='submit' variant='contained'>Confirm Name Update</Button>
                                <h3>Note: The product name specific here will be the product name displayed on the sales map.</h3>
                            </div>
                            <div className='danger-zone'>

                                {/* TODO: */}
                                {/* Incorporate some sort of "Are you sure? Type name of product to delete." */}
                                <h2>Delete Product:</h2>
                                <Button onClick={handleDeleteDialogOpen} variant='contained' color='secondary'>Delete</Button>
                            </div>
                        </>
                        :
                        <CircularProgress size='10vmin' sx={{position: 'absolute', top: '40vh'}}/>
                    }

                </form>
            </div>
        </div>
    )
}

export default ProductManagementPage
