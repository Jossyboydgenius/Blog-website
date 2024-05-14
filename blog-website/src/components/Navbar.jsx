import React from 'react'
import { NavLink } from 'react-router-dom'

// React Icons
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Navbar = () => {
  //NavItems
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/services', link: 'services' },
    { path: '/about', link: 'about' },
    { path: '/blogs', link: 'blogs' },
    { path: '/contact', link: 'contact' },
  ]
  return (
    <header className='bg-black text-white'>
      <nav className='px-4  py-4 max-w-7xl mx-0'>
        <a href="/" className='text-xl font-bold text-white' >Morethan<span className='text-orange-500'>SPEC
        </span></a>
        {/* NavItems for large devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, link }) => <li className='text-white' key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
        {/* Menu Icons */}
        <div className='text-white lg:flex gap-4 text-lg hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="/" className='hover:text-orange-500'><FaInstagram /></a>
          <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
          <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
           hover:text-orange-500 transition-all duration-200 ease-in'>Log in
          </button>
        </div>
        {/* Mobile menu button, display mobile screen */}
        <div>
          <button className='cursor-pointer'><FaBars className='w-5 h-5' /></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
