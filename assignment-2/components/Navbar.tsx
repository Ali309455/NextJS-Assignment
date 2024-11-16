import React from 'react'

const Navbar = () => {
  return (
    
      <div className='w-[1322px] h-[91px] bg-[#252b42] mx-auto'>
        <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-bold text-white pl-[136px] pt-[16px] pb-[17px] pr-[41px]'>BRANDNAME</h3>
            <div className='w-[815px] h-[58px] flex items-center justify-between pr-[143px] pt-[16px] pb-[17px]'>
            <ul className='flex items-center gap-4'>
                <li className='text-sm list-none text-white'>Home</li>
                <li className='text-sm list-none text-white'>Product</li>
                <li className='text-sm list-none text-white'>Pricing</li>
                <li className='text-sm list-none text-white'>Contact</li>
            </ul>
            <div className='flex '>
            <button className='text-sm font-bold text-white p-3'>Login</button>
            <button className='text-sm font-bold text-white p-3 bg-[#23A6F0]'>join Us</button>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar
