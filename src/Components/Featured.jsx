import React from 'react'
import { icons } from '../assets/data'

function Featured() {
  return (
    <>
    <div className='flex flex-col items-center md:flex-row md:justify-around gap-9 my-[10vh] h-[30vh]'>

      <div className='flex min-w-[200px]  items-center gap-[20px] w-[300px]'>
        <img src={icons.delivery} alt="" className='w-10'/>
        <div>
          <h1 className='text-lg font-semibold font-jost'>Wordwide Shopping</h1>
          <p className='text-sm font-normal font-jost'>Special financing and earn rewwards.</p>
        </div>
      </div>

      <div className='flex min-w-[200px]  items-center gap-[20px] w-[300px]'>
        <img src={icons.retun} alt="" className='w-10'/>
        <div>
          <h1 className='text-lg font-semibold font-jost'>30 Day Guarantee</h1>
          <p className='text-sm font-normal font-jost'>30-days free return policy.</p>
        </div>
      </div>

      <div className='flex min-w-[200px]  items-center gap-[20px] w-[300px]'>
        <img src={icons.secure} alt="" className='w-10'/>
        <div>
          <h1 className='text-lg font-semibold font-jost'>Secured Payments</h1>
          <p className='text-sm font-normal font-jost'>We accept all majoi credit cards.</p>
        </div>
      </div>


    </div>
    
    </>
  )
}

export default Featured