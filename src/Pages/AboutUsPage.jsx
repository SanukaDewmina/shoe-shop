import React from 'react'
import { heros } from '../assets/data'

function AboutUsPage() {
  return (
    <>
    <div className='flex flex-col md:flex-row mt-[10vh] py-5 md:py-[80px] px-10 min-h-[70vh] bg-gray-100'>

      {/* left section */}
      <div className='flex flex-col justify-center w-full gap-5 px-0 py-5 md:w-1/2 md:px-5'>

          <h1 className='mb-6 text-4xl font-semibold text-gray-600 font-jost'>About Us</h1>

          <p className='my-2 text-xl font-medium text-gray-600 font-jost'>Welcome to Walkwise</p>

          <p className='my-2 text-lg font-normal text-gray-700 font-jost'>At Walkwise we believe that the right pair of shoes can transform your day. Founded in 2002 by sanuka athapaththu,<a href="https://www.facebook.com/profile.php?id=61556399465130" className='text-red-400'>Sanuka Athapaththu</a> our mission is to provide you with an extensive range of high-quality footwear that blends style, comfort, and durability.

          Walkwise was born out of a passion for footwear and a desire to offer something different. We started with a small collection of classic styles and quickly expanded to include a diverse selection of shoes for every occasion. From casual sneakers to elegant formal shoes, our curated collection ensures that you find exactly what you’re looking for.</p> 

          <h1 className='hidden my-4 text-xl font-medium text-gray-600 font-jost md:block'>Sustainability and Community</h1>

          <p className='hidden my-2 text-lg font-normal text-gray-500 font-jost md:block'>
          We are committed to making a positive impact on our community and the environment. Our eco-friendly initiatives include using sustainable materials in our products and packaging, and supporting local charities and events. By choosing [Your Shoe Shop Name], you’re not only investing in quality footwear but also contributing to a better future.
          </p>

      </div>

      {/* right section */}
      <div className='w-full md:w-1/2'>
      <img src={heros[1].image} alt="" className='w-full h-auto' />

     </div>

    </div>
    </>
  )
}

export default AboutUsPage