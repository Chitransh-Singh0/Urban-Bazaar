import React, { useContext } from 'react'
import Layout from '../components/Layout'
import MyContext from '../context/data/MyContext'
import HeroSection from '../components/HeroSection'
import Filter from '../components/Filter'
import ProductCards from '../components/ProductCards'
import Track from '../components/Track'
import Testimonial from '../components/Testimonials'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartSlice'



const Home = () => {

  const dispatch = useDispatch();
  const cardItem = useSelector((state)=> state.cart);

  console.log(cardItem);
  
  const addCart=()=>{
    dispatch(addToCart("shirt"));
  }

  const deleteCart=()=>{
    dispatch(deleteFromCart("shirt"));
  }



  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCards/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
