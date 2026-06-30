import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Career from './pages/Career'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

import PrivacyPolicy from './pages/Privacy_Policy'
import ShippingPolicy from './pages/Shipping_Policy'
import RefundPolicy from './pages/Refund_Policy'
import TermsCondi from './pages/Terms'
import AnnouncementBar from './components/AnnouncementBar'
import SplashScreen from './components/SplashScreen'
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile";





const App = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
}, []);
  if (loading) {
  return <SplashScreen />;
}
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    {/* <div> */}
      <ToastContainer />
      <AnnouncementBar />
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/careers' element={<Career />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        
        <Route path='/shipping-delivery-policy' element={<ShippingPolicy/>}/>
        <Route path='/refund-cancellation-policy' element={<RefundPolicy/>}/>
        <Route path='/terms-conditions' element={<TermsCondi/>}/>
        <Route path="/profile" element={<Profile />} />


      </Routes>
      <Footer />  

      
    </div>
  )
}




export default App

