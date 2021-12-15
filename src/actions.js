import { getDistributors, getProducts, getSpecificProduct, getAccountsByPage, getAccountsByOrderPage } from "./requests"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'

export const useDispatchProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        getProducts()
            .then(data => {
                if (data) {
                    dispatch({ type: 'SET_PRODUCTS', payload: data })
                }
            })
    }, [])
}


//This is a good compromise. Inside of the useEffect, we are checking to see if a selected product already exists. This keeps us from making excessive calls
// to the back end.
export const useDispatchSelectedProduct = (id) => {
    const dispatch = useDispatch()
    const selectedProduct = useSelector(state => state.products.selectedProduct)
    useEffect(() => {
        if (!selectedProduct.product_name) {
            getSpecificProduct(id)
                .then(data => {
                    if (data) {
                        dispatch({ type: 'SET_SELECTED_PRODUCT', payload: data })
                    }
                })
        } 
    }, [])
}


export const useDispatchDistributors = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        // console.log('distributor state refreshed')
        getDistributors()
            .then(data => {
                if (data) {
                    dispatch({ type: 'SET_DISTRIBUTORS', payload: data })
                }
            })
    }, [])
}


export const useDispatchAccounts = () => {

    const dispatch = useDispatch()
    const page = useSelector(state => state.accounts.scrollPage)
    const filterType = useSelector(state => state.accounts.filterType)

    useEffect(() => {
        if (filterType === 'alphabetical') {
            getAccountsByPage(page)
            .then(data => {
                if (data) {
                    if (page === 0){
                        dispatch({ type: "SET_ACCOUNTS", payload: data})
                    } else {
                        dispatch({ type: "APPEND_ACCOUNTS", payload: data})
                        dispatch({ type: "SET_LOADING_LOCK", payload: false})
                    }
                }
            })
        } else if (filterType === 'orders') {
            getAccountsByOrderPage(page)
            .then(data => {
                if (data) {
                    if (page === 0){
                        dispatch({ type: "SET_ACCOUNTS", payload: data})
                    } else {
                        dispatch({ type: "APPEND_ACCOUNTS", payload: data})
                        dispatch({ type: "SET_LOADING_LOCK", payload: false})
                    }
                }
            })
        }

    }, [page, filterType])
}





