import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CollectionPage from './Pages/CollectonPage'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUsPage'
import WhisListPage from './Pages/WhisListPage'
import CartPage from './Pages/CartPage'
import PaymentPage from './Pages/PaymentPage'
import UserPage from './Pages/UserPage'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ProductPage from './Pages/ProductPage'


function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/collection' element={<CollectionPage />}/>
      <Route path='/about' element={<AboutUsPage />}/>
      <Route path='/contact' element={<ContactUsPage />}/>
      <Route path='/user' element={<UserPage />}/>
      <Route path='/wishlist' element={<WhisListPage />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/payment' element={<PaymentPage />}/>
      <Route path='/productpage/:productId' element={<ProductPage />}/>
    </Routes>
    <Footer />
      
    </>
  )
}

export default App
