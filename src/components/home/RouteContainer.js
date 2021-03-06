import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ReportsLanding from '../reports/ReportsLanding'
import AccountsLanding from '../accounts/AccountsLanding'
import ProductsLanding from '../products/ProductsLanding'
import DistributorsLanding from '../distributors/DistributorsLanding'
import HomePage from './HomePage'
import NavBar from './NavBar'
import ProductDetailsPage from '../products/ProductDetailsPage'
import DistributorsProductManagement from '../distributors/DistributorsProductManagement'
import ProductCreationPage from '../products/ProductCreationPage'
import ProductManagementPage from '../products/ProductManagementPage'
import ProductOrdersGraphPage from '../products/charts/ProductOrdersGraphPage'
import ProductAccountsGraphPage from '../products/charts/ProductAccountsGraphPage'
import AccountEdit from '../accounts/AccountEdit'
import AccountDetails from '../accounts/AccountDetails'

const RouteContainer = () => {
    return (
        <>
        <NavBar />
        <Routes>
          <Route path='/reports' element={ <ReportsLanding /> } />
          <Route path='/products' element={ <ProductsLanding /> } />
          <Route path='/products/:id' element={ <ProductDetailsPage /> } />
          <Route path='/products/:id/manage' element={ <ProductManagementPage /> } />
          <Route path='/products/:id/orders' element={ <ProductOrdersGraphPage /> } />
          <Route path='/products/:id/accounts' element={ <ProductAccountsGraphPage /> } />
          <Route path='/products/new' element={ <ProductCreationPage /> } />
          <Route path='/accounts/:id/manage' element={ <AccountEdit /> } />
          <Route path='/accounts/:id/details' element={ <AccountDetails /> } />
          <Route path='/accounts' element={ <AccountsLanding /> } />
          <Route path='/distributors' element={ <DistributorsLanding /> } />
          <Route path='/distributors/:id/manage' element={ <DistributorsProductManagement /> } />
          <Route path='/distributors/:id/details' element={ <DistributorsLanding /> } />
          <Route path='/' element={ <HomePage /> } />
        </Routes>
        </>
    )
}

export default RouteContainer
