import { Navlist } from '@/data/Navlist';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNav = ({ setShowMobileNav, isActive }) => {
  const router = useRouter();
  return (
    <nav className='bg-secondary w-screen sm:w-[348px] right-0 h-[492px] px-[49px] sm:right-[49px] pt-[120px] border-[0.5px] border-white border-opacity-[4%] rounded-lg backdrop-filter backdrop-blur-[30px] mt-[111px] lg:mt-[140px] fixed transition-all ease-in duration-300 z-[999]'>
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
          {Navlist.map(({ id, name, link }) => (
            <li
              onClick={() => setShowMobileNav(false)}
              key={id}
              className={`${
                isActive(router, link) ? 'gradient-text ' : ''
              } hover:text-primary transition duration-300 ease-in-out`}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <Button text='Register' link={'/register'} />
      </div>
    </nav>
  );
};

export default MobileNav;
