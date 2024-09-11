import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { shopContext } from '../ContextApi';

function NavBar() {
  // Sidebar show/hide state
  const [visible, SetVisible] = useState(false);

  const {cart,icons,wishlist,name} = useContext(shopContext)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-5 bg-white shadow-md md:px-9 h-[10vh]">
          {/* Logo */}
          <Link to="/" onClick={()=>{scrollTo(0,0)}}>
          <img src={icons.logo} alt="logo" className="w-[130px] md:w-[150px] cursor-pointer"/>
          </Link>

          {/* Navbar for the dekstop */}
          <ul className="items-center hidden gap-8 md:flex font-jost">
            <li>
              
              <NavLink
                to="/"
                className="font-medium text-gray-800 transition-all duration-300 hover:text-black"
                onClick={()=>{scrollTo(0,0)}}
        
              >
                HOME
                <hr className="w-2/3 h-[3px] mx-auto bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className="font-medium text-gray-800 transition-all duration-300 hover:text-black"
                onClick={()=>{scrollTo(0,0)}}
        
              >
                COLLECTION
                <hr className="w-2/3 h-[3px] mx-auto bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="font-medium text-gray-800 transition-all duration-300 hover:text-black"
                onClick={()=>{scrollTo(0,0)}}
        
              >
                ABOUT
                <hr className="w-2/3 h-[3px] mx-auto bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-medium text-gray-800 transition-all duration-300 hover:text-black"
                onClick={()=>{scrollTo(0,0)}}
        
              >
                CONTACT
                <hr className="w-2/3 h-[3px] mx-auto bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            </li>
          </ul>

          {/* Icons for the desktop */}
          <div className="flex items-center gap-5">

            <Link to="/user" onClick={()=>{scrollTo(0,0)}} title={name}>
              <div className="relative hidden md:block">
                <img
                  src={icons.user}
                  alt="user"
                  className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-80"
                />
              </div>
            </Link>

            <Link to="/wishlist" onClick={()=>{scrollTo(0,0)}}>
              <div className="relative hidden md:block">
                <img
                  src={icons.heart}
                  alt="wishlist"
                  className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-80"
                />
                <span className={`absolute px-1 text-xs ${wishlist.length > 0 ? "" : "hidden"} text-white bg-black rounded-full -top-2 -right-2`}>{wishlist.length}</span>
              </div>
            </Link>

            <Link to="/cart" onClick={()=>{scrollTo(0,0)}}>
              <div className="relative hidden md:block">
                <img
                  src={icons.cart}
                  alt="cart"
                  className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-80"
                />
                <span className={`absolute px-1 text-xs ${cart.length > 0 ? "" : "hidden"} text-white bg-black rounded-full -top-2 -right-2`}>{cart.length}</span>
              </div>
            </Link>

            {/* Menu Icon for Mobile */}
            <img
              src={icons.menu}
              alt="menu"
              className="block w-6 h-6 transition-opacity cursor-pointer md:hidden hover:opacity-80"
              onClick={() => {
                SetVisible(true);
              }}
            />
          </div>
      </header>

       {/* --------------------------side nav bar in mobile view-------------------------- */}

            {/* Sidebar for Mobile */}
            <section
              className={`fixed top-0 right-0 bottom-0 z-50 transition-all duration-300 h-full  ${
                visible ? 'w-full' : 'w-0'
              } overflow-hidden bg-white shadow-lg md:hidden`}
            >
              {/* sidenav close button */}
                  <div
                    className="flex items-center gap-2 px-4 py-8 text-gray-700 cursor-pointer"
                    onClick={() => { SetVisible(false);scrollTo(0,0)}}>
                      
                  
                    <MdArrowBackIosNew />
                    <span>Back</span>
                  </div>

              {/* Sidebar nav links */}
                    <ul className="flex flex-col items-center gap-[5vh] px-4 my-[10vh] h-[40%] font-jost">
                      <li>
                        <Link
                          to="/"
                          onClick={() => {
                            SetVisible(false);
                            scrollTo(0,0)
                          }}
                          className="block text-lg font-medium text-gray-800 transition-colors hover:text-black"
                        >
                          HOME
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/collection"
                          onClick={() => {
                            SetVisible(false);
                            scrollTo(0,0)
                          }}
                          className="block text-lg font-medium text-gray-800 transition-colors hover:text-black"
                        >
                          COLLECTION
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/about"
                          onClick={() => {
                            SetVisible(false);
                            scrollTo(0,0)
                          }}
                          className="block text-lg font-medium text-gray-800 transition-colors hover:text-black"
                        >
                          ABOUT
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contact"
                          onClick={() => {
                            SetVisible(false);
                            scrollTo(0,0)
                          }}
                          className="block text-lg font-medium text-gray-800 transition-colors hover:text-black"
                        >
                          CONTACT
                        </Link>
                      </li>
                    </ul>

              <hr className="h-[1px]  bg-gray-500"  />

              {/* Sidebar user, cart, wishlist */}
                <div className="flex flex-col items-start gap-6 px-4 mt-[5vh]">


                    <Link to="/user"
                          onClick={() => { SetVisible(false);scrollTo(0,0)}}>
                      <div className="flex items-center gap-3">
                          <img src={icons.user} alt="user" className="w-6 h-6" />
                          <span className="font-medium font-jost">Login/Sign in</span>
                        </div>
                    </Link>

                    <Link to="/cart"
                          onClick={() => { SetVisible(false);scrollTo(0,0)}}>
                      <div className="flex items-center gap-3">
                          <img src={icons.cart} alt="cart" className="w-6 h-6" />
                          <span className="font-medium font-jost">Cart ({cart.length})</span>
                        </div>
                    </Link>
                    <Link to="/wishlist"
                          onClick={() => { SetVisible(false);scrollTo(0,0)}}>
                        <div className="flex items-center gap-3">
                            <img src={icons.heart} alt="wishlist" className="w-6 h-6" />
                            <span className="font-medium font-jost">Wishlist ({wishlist.length})</span>
                          </div>
                    </Link>
                  
                </div>

            </section>

    </>
  );
}

export default NavBar;
