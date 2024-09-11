import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { shopContext } from '../ContextApi';
import { MdErrorOutline } from "react-icons/md";

function PaymentPage() {

  const { cart } = useContext(shopContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            {cart.length > 0 ? 
            <>
              <FaCheckCircle className="text-green-500 text-9xl" />
            </> 
            :
            <>
              <MdErrorOutline className="text-red-500 text-9xl" />
            </>}
          </div>
          <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 font-jost">
            {cart.length > 0 ? "Payment Successful!" : "Your Cart is Empty"}
          </h1>
          <p className="mb-6 text-center text-gray-600">
            {cart.length > 0 ? "Thank you for your order! Your payment has been processed successfully." : "Return to our collection and add items to your cart."}
          </p>
          <p className="mb-6 text-center text-gray-600">
            {cart.length > 0 ? "A confirmation email has been sent with your order details." : "If you encounter any issues, feel free to contact our support team."}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-600">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
