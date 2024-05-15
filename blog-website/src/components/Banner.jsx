import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to MorethanSpec</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>We are a team of professionals who are dedicated to providing you with the best services.</p>
        {/* <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Get Started</button> */}
        <div>
          <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>
            Learn More
            <FaArrowRight className='mt-1 ml-2' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner