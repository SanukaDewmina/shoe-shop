import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import NewArrivels from '../Components/NewArrivels'
import Title from '../Components/Title'
import Featured from '../Components/Featured'

function HomePage() {
  return (
    <>
    <Hero />
    <Category />
    <Title text1="New" text2="Arrivals"/>
    <NewArrivels />
    <hr className='bg-gray-400 h-[2px]' />
    <Featured />
    <hr className='bg-gray-400 h-[2px]' />
    </>
  )
}

export default HomePage