import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Cards from '../components/Cards'
import SelectType from '../components/SelectType'
import FAQs from '../components/FAQs'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className='z-0'>
      <HomeHeader/>
      <Cards/>
      <Carousel/>   
      <SelectType/>
      <FAQs/> 
    </div>
  )
}
