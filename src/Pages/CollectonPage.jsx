import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { shoes } from '../assets/data';
import Card from '../Components/Card';

function CollectionPage() {

  
  const [filterShow, setFilterShow] = useState(false);

  // Filter states
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);

  // Toggle category filter
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle color filter
  const toggleColor = (e) => {
    if (color.includes(e.target.value)) {
      setColor((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setColor((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle brand filter
  const toggleBrand = (e) => {
    if (brand.includes(e.target.value)) {
      setBrand((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setBrand((prev) => [...prev, e.target.value]);
    }
  };

  // Filter logic
  const filterShoes = () => {

    let filteredShoes = shoes;

    if (category.length > 0) {
      filteredShoes = filteredShoes.filter((shoe) => category.includes(shoe.type));
    }

    if (color.length > 0) {
      filteredShoes = filteredShoes.filter((shoe) => color.includes(shoe.color));
    }

    if (brand.length > 0) {
      filteredShoes = filteredShoes.filter((shoe) => brand.includes(shoe.brand));
    }

    return filteredShoes;
  };

  return (
    <>
      <div className={`fixed z-50 p-3 bg-gray-900 rounded-full opacity-30 hover:opacity-90 cursor-pointer bottom-10 right-5 md:right-10`} onClick={()=>{scrollTo(0,0)}}>
      <MdKeyboardDoubleArrowUp className='text-4xl text-white'/>
      </div>

      <div className='flex flex-col gap-5 px-6 py-4 mt-[10vh] mb-10 bg-white'>
        {/* Filter Options */}
        <div className={` ${filterShow ? "grid" : "hidden"} gap-4 p-4 overflow-hidden bg-gray-100 rounded-lg shadow-lg grid-cols-2 md:grid-cols-4`}>


          {/* Category Filter */}
          <div>
            <h1 className='mb-3 text-lg font-bold'>Category</h1>
            <div className='p-3 bg-white border border-gray-300 rounded-md'>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="Training" onChange={toggleCategory} />
                <span>Training</span>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="Running" onChange={toggleCategory} />
                <span>Running</span>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="Walking" onChange={toggleCategory} />
                <span>Walking</span>
              </div>
              <div className='flex items-center gap-3'>
                <input type="checkbox" value="Casual" onChange={toggleCategory} />
                <span>Casual</span>
              </div>
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h1 className='mb-3 text-lg font-bold'>Color</h1>
            <div className='p-3 border border-gray-300 rounded-md'>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="red" onChange={toggleColor} />
                <span>Red</span>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="blue" onChange={toggleColor} />
                <span>Blue</span>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="green" onChange={toggleColor} />
                <span>Green</span>
              </div>
              <div className='flex items-center gap-3'>
                <input type="checkbox" value="black" onChange={toggleColor} />
                <span>Black</span>
              </div>
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h1 className='mb-3 text-lg font-bold'>Brand</h1>
            <div className='p-3 border border-gray-300 rounded-md'>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="Nike" onChange={toggleBrand} />
                <span>Nike</span>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="Adidas" onChange={toggleBrand} />
                <span>Adidas</span>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <input type="checkbox" value="Puma" onChange={toggleBrand} />
                <span>Puma</span>
              </div>
              <div className='flex items-center gap-3'>
                <input type="checkbox" value="Reebok" onChange={toggleBrand} />
                <span>Reebok</span>
              </div>
            </div>
          </div>

          
        </div>

        {/* Toggle Filter Button */}
        <div className='mx-auto cursor-pointer' onClick={() => setFilterShow(!filterShow)}>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium text-gray-600 font-jost'>Filter Items</h1>
            <MdArrowForwardIos className={`${filterShow ? "-rotate-90" : "rotate-90"}`} />
          </div>
        </div>
      </div>

      {/* Shoes Collection Grid */}
      <div className='min-h-[90vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center px-4'>
        {filterShoes().map(item => (
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
  );
}

export default CollectionPage;
