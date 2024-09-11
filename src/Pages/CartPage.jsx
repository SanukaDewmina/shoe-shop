import React, { useContext, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { FaShop, FaTruck } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { shopContext } from '../ContextApi';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, icons, setCart ,total ,optns1 ,setOptns1,optns2 ,setOptns2,shipping} = useContext(shopContext);

  // navigate to payment page

  const navigate = useNavigate();

  // ----------------- Remove from cart
  function removeItemFromCart(id) {
    let remove = cart.filter(item => item.id !== id);
    setCart(remove);
  }

  // Increment and decrement quantity
  function qntIncrement(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function qntDecrement(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else if (item.quantity === 1) {
        removeItemFromCart(id); // Remove item if quantity is 1 and decrement is clicked
      }
      return item;
    });
    setCart(updatedCart);
  }

  // ----------------- Delivery and Payment options ----------------- //

  const [errorMsg, setErrorMsg] = useState("");

  // Proceed to payment function
  function chekedOptionsareFilled() {
    if (!optns1 || !optns2) {
      setErrorMsg("Please select both a delivery and payment option.");
    } else {
      setErrorMsg("");
    }
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row mt-[10vh] py-9 min-h-[100vh] gap-10 sm:gap-0 px-2">
        {/* Cart section */}
        <div className="w-full px-1 sm:w-1/2 md:px-5">
          <h1 className="text-2xl font-bold text-gray-700 font-sofia">Cart Items</h1>

          {cart.length > 0 ? (
            <div className="flex flex-col gap-1">
              {cart.map(item => (
                <div className="flex justify-between border border-gray-300" key={item.id}>
                  <div className="flex flex-col flex-1 gap-0 px-2 border-r border-gray-300 md:py-2 md:flex-row">
                    <img src={item.image} alt="" className="min-w-[100px] w-[100px] min-h-auto" />
                    <div className="flex flex-col gap-2 p-2">
                      <p className="text-base font-semibold font-sofia">{item.name}</p>
                      <p className="text-sm font-medium text-green-500 font-sofia">Rs.{item.newPrice}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center flex-1 gap-2 border-r border-gray-300 md:text-xl">
                    <MdKeyboardArrowLeft onClick={() => qntDecrement(item.id)} />
                    <span>{item.quantity}</span>
                    <MdKeyboardArrowRight onClick={() => qntIncrement(item.id)} />
                  </div>

                  <div className="flex items-center justify-center flex-1" onClick={() => removeItemFromCart(item.id)}>
                    <CiCircleRemove className="text-xl text-red-400 cursor-pointer md:text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid border border-gray-400 rounded-md place-items-center mt-9" title="Add Product Before Payment :)">
              <TbShoppingCartQuestion className="mt-10 text-gray-300 text-7xl" />
              <h1 className="my-10 text-lg font-medium text-gray-400 font-jost">Your Cart Is Empty</h1>
            </div>
          )}
        </div>

        {/* Options section */}
        <div className="w-full px-1 sm:w-1/2 md:px-5">

          {/* Delivery options */}
          <h1 className="mb-2 text-2xl font-bold text-gray-700 font-sofia">Delivery Options</h1>
          <div className="flex flex-col gap-4 py-5 md:flex-row">
            <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md" onClick={() => setOptns1("atShop")}>
              <span className={`block w-[15px] h-[15px] rounded-full border-2 ${optns1 === "atShop" ? "bg-green-400 border-green-400" : "border-gray-400"}`}></span>
              <FaShop className="text-3xl text-gray-600" />
              <h1 className="text-lg font-medium text-gray-600 font-jost">Pick-up at Shop</h1>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md" onClick={() => setOptns1("standard")}>
              <span className={`block w-[15px] h-[15px] rounded-full border-2 ${optns1 === "standard" ? "bg-green-400 border-green-400" : "border-gray-400"}`}></span>
              <FaTruck className="text-3xl text-gray-600" />
              <h1 className="text-lg font-medium text-gray-600 font-jost">Standard (2-7 Days)</h1>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md" onClick={() => setOptns1("sameday")}>
              <span className={`block w-[15px] h-[15px] rounded-full border-2 ${optns1 === "sameday" ? "bg-green-400 border-green-400" : "border-gray-400"}`}></span>
              <MdDeliveryDining className="text-3xl text-gray-600" />
              <h1 className="text-lg font-medium text-gray-600 font-jost">Same-Day (Rs400)</h1>
            </div>
          </div>

          {/* Payment options */}

          <h1 className="mt-3 text-2xl font-bold text-gray-700 font-sofia">Payment Options</h1>
          <div className="flex flex-col gap-4 py-5 md:flex-row">
            <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md" onClick={() => setOptns2("cash")}>
              <span className={`block w-[15px] h-[15px] rounded-full border-2 ${optns2 === "cash" ? "bg-green-400 border-green-400" : "border-gray-400"}`}></span>
              <img src={icons.cash} alt="" />
              <h1 className="text-lg font-medium text-gray-600 font-jost">Cash On Delivery</h1>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md" onClick={() => setOptns2("visa")}>
              <span className={`block w-[15px] h-[15px] rounded-full border-2 ${optns2 === "visa" ? "bg-green-400 border-green-400" : "border-gray-400"}`}></span>
              <img src={icons.visa} alt="" />
              <h1 className="text-lg font-medium text-gray-600 font-jost">Visa/Master card</h1>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md" onClick={() => setOptns2("paypal")}>
              <span className={`block w-[15px] h-[15px] rounded-full border-2 ${optns2 === "paypal" ? "bg-green-400 border-green-400" : "border-gray-400"}`}></span>
              <img src={icons.paypal} alt="" />
              <h1 className="text-lg font-medium text-gray-600 font-jost">PayPal</h1>
            </div>
          </div>

          {/* total  */}
          <h1 className="mt-3 text-2xl font-bold text-gray-700 font-sofia">Total</h1>
          
          <div className="flex flex-col gap-5 px-5 py-5 border border-gray-300">

            <div className='flex items-center justify-between'>
              <h1 className='text-lg font-medium text-gray-500'>Subtotal</h1>
              <span className='text-lg font-medium text-gray-500'>Rs.{total}</span>
            </div>

            <div className='flex items-center justify-between'>
              <h1 className='text-lg font-medium text-gray-500'>Delivery</h1>
              <span className='text-lg font-medium text-gray-500'>Rs.{cart.length > 0 ? shipping : 0}</span>
            </div>

            <div className='flex items-center justify-between'>
              <h1 className='text-lg font-bold text-gray-800'>Total</h1>
              <span className='text-lg font-bold text-red-500'>Rs.{cart.length > 0 ? Number(total + shipping).toFixed(2) : 0.00}</span>
            </div>


          </div>

          <div className='flex justify-center md:justify-end'>
          <button className="px-10 py-2 text-white bg-black rounded-md mt-4 hover:bg-gray-700" onClick={()=>{chekedOptionsareFilled, navigate("/payment"), scrollTo(0,0)}}>Proceed to Payment</button>
          </div>
          {errorMsg && <p className="text-center text-red-500 md:text-right ">{errorMsg}</p>}

        </div>

          
      </div>
      
    </>
  );
}

export default CartPage;
