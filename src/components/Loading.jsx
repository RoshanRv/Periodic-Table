import React from 'react'
import load from '../img/load.gif'

const Loading = () => {
  return (
    <div className='w-full h-full bg-black flex flex-col justify-center items-center absolute'>
        <img src={load} alt="" className='w-60'/>
        <p className='text-white text-4xl animate-bounce pt-8 font-disp'>Loading...</p>
    </div>
  )
}

export default Loading