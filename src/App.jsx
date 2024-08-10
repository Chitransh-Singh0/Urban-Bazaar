import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Home from './pages/Home'
import Order from './pages/Order'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import NoPage from './pages/NoPage'

import MyState from './context/data/MyState'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ProductInfo from './pages/ProductInfo'
import AddProducts from "./pages/AddProducts"
import UpdateProduct from "./pages/UpdateProduct"
import Allproducts from './pages/AllProducts'

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/order' element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          } />
          <Route path='/*' element={<NoPage />} />
          <Route path='/allproducts' element={<Allproducts />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addproduct' element={
            <ProtectedRoutesForAdmin>
              <AddProducts />
            </ProtectedRoutesForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          } />
          <Route path='/signup' element={<SignUp />} />

        </Routes>
      </Router>
    </MyState>
  )
}

export default App

// Protectes user route
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// protected route for admin 
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if (admin.user.email === 'thakurchitransh001@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}