import React, { useState } from 'react';
import { heros } from '../assets/data'


function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Message sent!');
  };

  return (
    <>

        <div className='flex flex-col md:flex-row mt-[10vh] py-5 md:py-[80px] px-10 min-h-[70vh] bg-white '>

        {/* left section */}
        <div className='flex flex-col justify-center w-full gap-5 px-0 py-5 md:w-1/2 md:px-5'>

            <h1 className='mb-6 text-4xl font-semibold text-gray-600 font-jost'>Contact Us</h1>

            <p className='my-2 text-xl font-medium text-gray-600 font-jost'>Walk wise</p>

            <ul>
              <li>Address: 123 Main Street, Ja-ela, Srilanka</li>
              <li>Email: Walkwise@gmail.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Website: www.walkwise.com</li>
            </ul>


        </div>

        {/* right section */}
        <div className='w-full mt-5 md:w-1/2'>
        <img src={heros[1].image} alt="" className='w-full h-auto' />

        </div>

        </div>
            
        <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
              <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">

                <h1 className="mb-4 text-2xl font-bold text-gray-700">Contact Us</h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-gray-600">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium text-gray-600 ">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none "
                  >
                    Send Message
                  </button>
                </form>

              </div>
        </div>
            
    </>

  );
}

export default ContactUsPage;
