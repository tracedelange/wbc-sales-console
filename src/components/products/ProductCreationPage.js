import { TextField, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { createNewProduct } from '../../requests'
import { useNavigate } from 'react-router'

const ProductCreationPage = () => {

    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState('')
    const [ready, setReady] = useState(false)

    const handleNewProductSubmit = (e) => {
        e.preventDefault()
        console.log(newProduct)
        createNewProduct(newProduct)
        .then(data => {
            if (data) {
                console.log(data)
                navigate(`/products/${data.id}`)
            }
        })
    }

    const handleFormChange = (e) => {
        setNewProduct(e.target.value)
    } 

    useEffect(()=>{
        if (newProduct !== ''){
            setReady(true)
        } else {
            setReady(false)
        }
    },[newProduct])


    return (
        <div className='sub-section-landing-page'>
            <div className='new-product-form-container'>
                <h1 className='new-product-title'>Register New Product</h1>
                <form className='new-product-form' onSubmit={handleNewProductSubmit}>
                    <TextField onChange={handleFormChange} label={'Product Name'} autoFocus value={newProduct} />
                    <Button disabled={ready ? false : true } variant='contained' type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default ProductCreationPage
