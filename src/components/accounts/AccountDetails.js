import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatchAccountOrders, useDispatchProducts } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { getAccountDetails } from '../../requests'
import { Divider } from '@mui/material'
import AccountOrderListItem from './AccountOrderListItem'
import { CircularProgress } from '@material-ui/core'
import AccountOrderSortBar from './AccountOrderSortBar'

const AccountDetails = () => {

    const { id } = useParams()

    const products = useSelector(state => state.products.products)

    console.log(products)

    const accountOrders = useSelector(state => state.accounts.accountOrders)
    const [accountDetails, setAccountDetails] = useState({})

    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        console.log('getting account details')
        getAccountDetails(id)
            .then((data) => {
                if (data) {
                    setAccountDetails(data)
                }
            })
    }, [])

    useDispatchAccountOrders(id)
    useDispatchProducts()

    useEffect(() => {
        if (accountOrders) {
            if (products.length > 0) {
                setOrderList(accountOrders.map((item) => <AccountOrderListItem key={item.id} products={products} data={item} />))
            }
        }
    }, [accountOrders, products])

    // console.log(accountDetails)
    // console.log(accountOrders)
    // console.log(products)


    return (
        <div className='sub-section-landing-page'>
            <div className='account-orders'>
                <h3>{accountDetails.display_name ? accountDetails.display_name : accountDetails.account_name} Order History</h3>
                <AccountOrderSortBar />
                <Divider flexItem orientation='horizontal' />
                <ul className='account-order-list'>

                    {orderList ? orderList : <CircularProgress />}
                </ul>
            </div>
        </div>
    )
}

export default AccountDetails
