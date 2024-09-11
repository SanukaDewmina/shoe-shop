import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../Components/Title'
import Card from '../Components/Card'
import { shopContext } from '../ContextApi';
import { IoIosArrowBack } from "react-icons/io";
import { MdStar } from "react-icons/md";

function ProductPage() {

  const {shoes,cart,setCart,size,setSize,wishlist,setWishlist} = useContext(shopContext)
  const { productId } = useParams(); 
  const [shoeData, setShoeData] = useState({});

  const navigate = useNavigate()


  useEffect(() => {
    const product = shoes.find((item) => item.id === parseInt(productId));
    if (product) {
      setShoeData(product);
    }
  }, [productId]);

 

  // add to cart function

  function handleaddtocard(index){
    let bfcart = shoes.find(item => item.id === index);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === bfcart.id);

    if(existingItem){
        // If the item is already in the cart, increase its quantity
        setCart(cart.map(item => 
            item.id === bfcart.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
    } else {
        // If the item is not in the cart, add it to the cart
        setCart(prv => [...prv, { ...bfcart, quantity: 1 }]);
    }
  
}

  // add to wishlistart function

  function handleaddtowishlist(index){
    let bfcart = shoes.find(item => item.id === index);

    // Check if the item already exists in the cart
    const existingItem = wishlist.find(item => item.id === bfcart.id);

    if(existingItem){
        // If the item is already in the cart, increase its quantity
        setWishlist(cart.map(item => 
            item.id === bfcart.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
    } else {
        // If the item is not in the cart, add it to the cart
        setWishlist(prv => [...prv, { ...bfcart, quantity: 1 }]);
    }
  
}


  return (
    <>
      {shoeData && 
      <>
        <div className='mt-[10vh] px-5 py-5'>

          <div className='flex items-center gap-3 text-xl' onClick={()=>{ navigate("/collection"); scrollTo(0,0)}}>
             <IoIosArrowBack />
             <h1>Back to Collection</h1>
          </div>

        </div>
        <div className='flex flex-col gap-5 px-0 py-6 md:flex-row md:gap-0 md:px-20 '>
        
          {/* ----------------product image------------------ */}
          <div className='w-[90%] h-auto md:w-1/2 flex items-center justify-center bg-gray-300 py-10 mx-auto'>
            <img src={shoeData.image} alt="product image" className='w-[90%] h-auto'/>
          </div>
        
          {/* -----------------product details----------------- */}
          <div className='w-[90%] h-auto md:w-1/2 flex flex-col p-5'>
            <h1 className='text-4xl font-bold font-jost'>{shoeData.name}</h1>

            <div className='flex items-center gap-2 '> 

                <MdStar className='text-xl text-yellow-500 '/>
                              
                <span className='text-xl font-bold text-yellow-600 font-sofia'>
                  {shoeData.productPageDetails?.reviews}/5
                </span>

            </div>

            <div className='flex items-center gap-2 mt-2'>
              <h1 className='text-2xl font-semibold text-green-500'>Rs:{shoeData.newPrice}</h1>
              <p className='text-base text-gray-400 line-through'>Rs:{shoeData.oldPrice}</p>
            </div>


            <p className='mt-2 text-base'>{shoeData.productPageDetails?.description}</p>

            <div className='flex items-center gap-2 mt-2'>
              <h1 className='text-lg font-semibold'>Materials</h1>
              <span>{shoeData.productPageDetails?.materials}</span>
            </div>

            {shoeData.color &&  
            <div className='flex items-center gap-2 mt-1 mb-5'>
              <h1 className='text-lg font-semibold'>Color :</h1>
              <span>{shoeData?.color}</span>
            </div>}

            <h1 className='text-lg font-semibold'>Available Size</h1>

            <div className='flex items-center gap-1 my-1'>
              {shoeData.productPageDetails?.sizesAvailable?.map((item, index) => (
                <span 
                  key={index} 
                  className={`px-2 py-2 text-black bg-gray-200 ${size === item ? 'border-red-300' : ''} border rounded-sm cursor-pointer`} 
                  onClick={() => {setSize(item)}}
                >
                  {item}
                </span>
              ))}        
            </div>

            <div className='flex items-center gap-2 mt-[5vh]'>

              <button className="px-8 py-3 mt-4 text-white bg-black rounded-[10px]"
              onClick={()=>{handleaddtocard(shoeData.id); scrollTo(0,0)}}
              >
                Add to cart
              </button>

              <button className="px-8 py-3 mt-4 text-white bg-black rounded-[10px]"
              onClick={()=>{handleaddtowishlist(shoeData.id); scrollTo(0,0)}}
              >
                Wishlist
              </button>

              
              
            </div>
          </div>
        </div>
      
      {/* --------------------------------Related products */}

      <Title text1="Related" text2="Products"/>

      <div className='grid grid-cols-2 px-3 mx-auto justify-items-center md:grid-cols-4  my-[5vh] gap-3 '>
        {shoes
          .slice(0, 4)
          .map(item => (
            <Card 
              key={item.id} 
              name={item.name}  
              oldPrice={item.oldPrice}  
              newPrice={item.newPrice}  
              offers={item.offers} 
              image={item.image} 
              id={item.id} 
              stock={item.instock}
            />
          ))}
      </div>
      </>
      }
    </>
  );
}

export default ProductPage;
