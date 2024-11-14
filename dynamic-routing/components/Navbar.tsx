import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <span className="ml-3 text-xl flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "><Link href={"/"}>WEBDEV.co</Link></span>
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900 hover:bg-gray-300 px-2 py-1/2 rounded-lg" href={"/about"}>About</Link>
      <Link className="mr-5 hover:text-gray-900 hover:bg-gray-300 px-2 py-1/2 rounded-lg" href={"/profile"}>Profile</Link>
      <Link className="mr-5 hover:text-gray-900 hover:bg-gray-300 px-2 py-1/2 rounded-lg" href={"/contact"}>Contact</Link>
      <Link className="mr-5 hover:text-gray-900 hover:bg-gray-300 px-2 py-1/2 rounded-lg" href={"/login"}>Login</Link>
    </nav>
    </div>
</header>
  )
}

export default Navbar
