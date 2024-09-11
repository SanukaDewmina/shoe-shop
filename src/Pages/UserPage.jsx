import React, { useContext, useState } from 'react';
import { shopContext } from '../ContextApi';

function UserPage() {

const {name,setName,email,setEmail} = useContext(shopContext)


  const [password, setPassword] = useState('');

  const [logsign , setLogsign] = useState(false)

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 font-jost">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>

          {logsign ? "" : 
          
          <>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
          </>}


          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
          >
            Sign Up
          </button>

          <p className='mt-2 text-center text-gray-500'> {logsign ? "Alredy have an Account ?" : "Create New Account."}
            <span className='text-blue-600 cursor-pointer' 
                  onClick={()=>{setLogsign(!logsign)}}>

                  {logsign ? " Login" : " Sign up"}

            </span>
          </p>

        </form>
      </div>
    </div>
  )
}

export default UserPage;
