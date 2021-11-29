import React from 'react'
import { useNavigate } from 'react-router'

const ProductListItem = ({data}) => {

    const navigate = useNavigate()

    const handleListItemClick = (e) => {
        // console.log(e.target.id)
        navigate(`/products/${e.target.id}`)
    }


    return (
        <li className='product-list-item' id={data.id} onClick={handleListItemClick}>
            {data.product_name}
        </li>
    )
}

export default ProductListItem
