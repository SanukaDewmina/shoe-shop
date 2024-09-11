import React from 'react'
import { category } from '../assets/data'
import {Link} from 'react-router-dom'

function Category() {
  return (

    <div className='flex px-10 overflow-scroll gap-9 md:justify-center py-7 sliderMain'>

      {category.map(item => (

        
          <Link key={item.id} >
          <div className='w-[300px] min-w-[180px] h-[300px] relative overflow-hidden slider'>

            <img src={item.image} alt=""  className='object-cover w-full h-full'/>
            <p className='absolute bottom-[-60px] left-0 right-0 py-4 text-lg font-medium text-center transition-all duration-200 text-white bg-black font-jost type '>{item.type} </p>
          </div>
          </Link>
     ))}

    </div>
  )
}

export default Category