import React from 'react'
import { Divider } from '@mui/material'

const AccountOrderListItem = ({ data, products }) => {

    console.log(products)

    let productName = products.find((item) => item.id === data.product_id)


    return (
        <li className='account-order-list-item'>
            <div>
                <p>
                    {data.sale_date}
                </p>
                <p>
                    {productName.product_name}
                </p>
            </div>
            <Divider flexItem orientation='horizontal' />
        </li>
    )
}

export default AccountOrderListItem
