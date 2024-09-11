import React, { useContext } from 'react'
import { shopContext } from '../ContextApi'
import { TbHeartX } from "react-icons/tb";
import { CiCircleRemove } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

function WhisListPage() {

  const {wishlist,setWishlist} = useContext(shopContext)

  // ----------------- Remove from wishlist
  function removeItemFromwishlist(id) {
    let remove = wishlist.filter(item => item.id !== id);
    setWishlist(remove);
  }


  const navigate =useNavigate()
  return (
    <>
      <div className="w-full px-1 md:w-1/2 md:px-5 mt-[12vh] mx-auto min-h-[90vh]">
          <h1 className="mt-4 mb-6 text-3xl font-bold text-center text-gray-700 font-sofia">wish list Items</h1>

          {wishlist.length > 0 ? (
            <div className="flex flex-col gap-1">

              {wishlist.map(item => (
                
                <div className="flex justify-between border border-gray-300 hover:bg-gray-300" >


                  <div className="relative flex justify-center flex-1 gap-0 p-3 border-r border-gray-300 md:py-2 md:flex-row">

                    <FaHeart className='absolute text-xl text-pink-500 top-2 left-2'/>

                    <img src={item.image} alt="" className="min-w-[100px]  min-h-auto" />

                  </div>
                  
                  <div className="flex flex-col flex-1 gap-2 p-3 border-r border-gray-300 ">
                      <p className="text-base font-semibold font-sofia">{item.name}</p>
                      <p className="text-sm font-medium text-green-500 font-sofia">Rs.{item.newPrice}</p>
                    </div>

                  <div className="flex-col flex-1 hidden gap-2 p-3 border-r border-gray-300 md:flex">
                      <p className="text-base font-semibold font-sofia">{item.productPageDetails.description}</p>
                      
                  </div>

                  <div className="flex items-center justify-center flex-1" onClick={() => removeItemFromwishlist(item.id)}>
                    <CiCircleRemove className="text-xl text-red-400 cursor-pointer md:text-2xl" />
                  </div>


                </div>
                
              ))}
            </div>
          ) : (
            <div className="grid mt-6 border border-gray-400 rounded-md cursor-default place-items-center " title="Add Items that you likes :)" onDoubleClick={()=>{navigate("/collection"); scrollTo(0,0)}}>
              <TbHeartX className="mt-10 text-gray-300 text-7xl" />
              <h1 className="my-10 text-lg font-medium text-center text-gray-400 font-jost">Your wishlist Is Empty <br /> (Double Click To Collection)</h1>
            </div>
          )}
        </div>
    </>
  )
}

export default WhisListPage