import React from 'react';
import Link from 'next/link';

const NavLink = () => {
  return (
    <div>
      <ul className='lg:flex items-center gap-[40px] text-white text-lg font-normal font-Inter'>
          <li className='cursor-pointer'>
            <Link href="/">Home</Link>
          </li>
          <li className='cursor-pointer '>
            <Link href="/about">About</Link>
          </li>
          <li className='cursor-pointer '>
            <Link href="/services">Services</Link>
          </li>
          <li className='cursor-pointer '>
            <Link href="/properties">Properties</Link>
          </li>
          <li className='cursor-pointer '>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
    </div>
  )
}

export default NavLink