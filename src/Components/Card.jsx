import React from 'react'
import {Link} from 'react-router-dom'
 
function Card({name,oldPrice,newPrice,offers,image,id,stock}) {
  return (

    <Link to={`/productpage/${id}`}> 
    
        <div className='relative shadow-lg rounded-sm' onClick={()=>{scrollTo(0,0)}}>
          
            {/* Card Image */}
            <div className='grid w-full py-5 bg-gray-200 place-items-center h-[170px] md:h-[280px] min-h-[150px]'>
              <img src={image} alt={name} className='w-[80%] hover:scale-105 hover:-rotate-6 transition-all ease-in-out duration-500' />
            </div>

            {/* Card Name and Price */}
            <div className='flex flex-col justify-center flex-1 p-4'>

              <div>
                {/* Shoe Name */}
                <h1 className='text-lg font-medium text-center text-gray-800 font-jost '>{name}</h1>

                {/* Price */}
                <div className='flex items-center justify-center mt-1 space-x-2'>
                  <span className='text-xl font-semibold text-green-600'>Rs{newPrice}</span>
                  {offers && 
                  <span className='text-gray-500 line-through'>Rs{oldPrice}</span>}
                </div>
              </div>

            </div>


            {/* Offers */}
              {offers && (
                <div className='mt-3 absolute top-[2px] right-[8px]'>
                  <span className='px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-[5px]'>
                    {offers}
                  </span>
                </div>
              )}

              <span className={`block w-3 hover:scale-150 h-3 rounded-full transition-all  duration-500 ${stock ? "bg-transparent" : "bg-red-400 "} absolute top-[20px] left-[20px]`} title={`${stock ? "Availble" : "Out of Stock "}`} >
              

              </span>

        </div>
    </Link>

  )
}

export default Card