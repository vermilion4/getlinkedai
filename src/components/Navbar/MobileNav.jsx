import { Navlist } from '@/data/Navlist';
import Image from 'next/image';
import Button from '../Button';

const MobileNav = ({ setShowMobileNav }) => {
  return (
    <nav className='bg-secondary w-[348px] h-[492px] px-[49px] sm:right-[49px] pt-[120px] border-[0.5px] border-white border-opacity-[4%] rounded-lg backdrop-filter backdrop-blur-[30px] mt-[111px] lg:mt-[140px] fixed transition-all ease-in duration-300 z-[999]'>
      <div onClick={() => setShowMobileNav(false)} className='cursor-pointer'>
        <Image
          src='/circle.svg'
          width={23}
          height={23}
          alt='circle icon'
          className='absolute top-10 right-[49px]'
        />
        <Image
          src='/close.svg'
          width={11}
          height={11}
          alt='close icon'
          className='absolute top-[46px] right-[55px]'
        />
      </div>
      <div>
        <ul className='flex flex-col gap-10 mb-10'>
          {Navlist.map((navItem, index) => (
            <li key={index}>{navItem}</li>
          ))}
        </ul>
        <Button text='Register' />
      </div>
    </nav>
  );
};

export default MobileNav;
