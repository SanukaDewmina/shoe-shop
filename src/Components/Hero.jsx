import React, { useEffect, useState } from 'react';
import { heros } from '../assets/data';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const [heroSlider, SetHeroSlider] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      SetHeroSlider((prev) => (prev + 1) % 3);
    }, 50000);

    return () => clearInterval(interval);
  }, [heroSlider]);

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center md:justify-between py-10 md:py-20 px-5 md:px-16 bg-white mt-[10vh]">
      {/* Hero Left Section */}
      <div className="flex flex-col items-center justify-center w-full space-y-4 text-center md:items-start md:w-1/2 md:text-left md:space-y-6">
        
        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <span className="block w-12 md:w-16 h-0.5 bg-black"></span>
          <p className="text-lg font-normal font-jost">{heros[heroSlider].subTitle}</p>
          <span className="block md:hidden w-12 h-0.5 bg-black"></span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-sofia">
          {heros[heroSlider].title}
        </h1>

        {/* Button */}
        <button className="px-8 py-3 mt-4 text-white bg-black rounded-full ver:border hover:border-2 hover:border-black hover:bg-white hover:text-black "
         
         onClick={()=>{navigate("/collection"); scrollTo(0,0)}}
         >
          See More
        </button>
      </div>

      {/* Hero Right Section */}
      <div className="w-full mt-10 md:w-1/2 md:mt-0">
        <img
          src={heros[0].image}
          alt="Hero"
          className="object-cover object-bottom w-full h-[300px] md:h-[500px] rounded-lg"
        />
      </div>


    </div>
  );
}

export default Hero;
