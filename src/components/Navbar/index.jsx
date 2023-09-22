import React, { useState, useEffect } from 'react';
import { Navlist } from '@/data/Navlist';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';

const Navbar = ({ setShowMobileNav }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex justify-between items-center w-full px-12 lg:px-32 pt-[34px] lg:pt-[63px] pb-[25px] max-w-[1600px] z-[999] fixed bg-secondary top-0 shadow-sm ${
        scrolled ? 'shadow-black' : ''
      }`}>
      <div>
        <Link href={'/'} className='text-3xl font-bold font-primary'>
          get<span className='text-primary'>linked</span>
        </Link>
      </div>
      <div className='hidden xl:flex items-center'>
        <ul className='flex gap-14 mr-[121px]'>
          {Navlist.map((navItem, index) => (
            <li key={index}>{navItem}</li>
          ))}
        </ul>
        <Button text='Register' className='items-center flex justify-center' />
      </div>
      <div className='xl:hidden' onClick={() => setShowMobileNav(true)}>
        <Image
          src='/hamburger.svg'
          width={19}
          height={14}
          alt='hamburger icon'
          className='cursor-pointer'
        />
      </div>
    </nav>
  );
};

export default Navbar;