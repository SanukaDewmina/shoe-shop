import React from 'react'

function Title({text1 , text2}) {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-[10px] my-[5vh]'>
      <h1 className='text-3xl font-medium text-black font-jost'>{text1} {text2}</h1>
      <span className='block w-[100px] h-[3px] bg-red-500'></span>
    </div>
    
    
    </>
  )
}

export default Title