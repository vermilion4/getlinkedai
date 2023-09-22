import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-[#100b20] pt-[83px] pb-[49px] px-[87px] md:px-[120px] xl:px-[224px] w-full max-w-[1600px] relative'>
      <div className='animate-pulse absolute lg:top-[30%] lg:left-20 w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[21px] lg:h-[25px] left-10 top-[20%]  z-0'>
        <Image
          src='/star.png'
          alt='star icon'
          width={26}
          height={32}
          className='animate-pulse'
        />
      </div>
      <div className='animate-pulse absolute lg:bottom-[30%] lg:right-20 w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[21px] lg:h-[25px] right-10 bottom-[20%]  z-0'>
        <Image
          src='/star.png'
          alt='star icon'
          width={26}
          height={32}
          className='animate-pulse'
        />
      </div>
      <Image
        src='/pink-star.svg'
        alt='star icon'
        width={21}
        height={25}
        className='animate-pulse absolute lg:bottom-[20%] left-[50%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[18px] lg:h-[22px] bottom-[45%]  z-0'
      />
      <div className='animate-pulse absolute lg:top-[30%] lg:right-[40%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[11px] lg:h-[15px] right-10 top-[20%]  z-0'>
        <Image
          src='/light-star.svg'
          alt='star icon'
          width={26}
          height={32}
          className='animate-pulse'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='text-3xl font-bold font-primary mb-2'>
              get<span className='text-primary'>linked</span>
            </h3>
            <p className='text-xs leading-[20.6px]'>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className='text-xs leading-[20.6px] mt-[39px] md:mt-0'>
            Terms of Use{' '}
            <span className='px-[9px] text-lg text-primary'>|</span> Privacy
            Policy
          </div>
        </div>
        <div className='md:mx-auto mt-10 md:mt-0'>
          <h3 className='text-sm text-primary mb-3 font-semibold'>
            Useful Links
          </h3>
          <ul className='space-y-3 mb-[18px]'>
            {['Overview', 'Timeline', 'FAQs', 'Register'].map(
              (navLink, index) => (
                <li key={index} className='text-xs leading-[20.6px]'>
                  {navLink}
                </li>
              )
            )}
          </ul>
          <div className='flex items-center gap-4'>
            <span className='text-xs text-primary'>Follow Us</span>
            <Image
              src='/instagram.svg'
              width={24}
              height={24}
              alt='Instagram Icon'
            />
            <Image src='/x.svg' width={19} height={17} alt='X Icon' />
            <Image
              src='/facebook.svg'
              width={10.5}
              height={20}
              alt='Facebook Icon'
            />
            <Image
              src='/linkedin.svg'
              width={24}
              height={24}
              alt='Linkedin Icon'
            />
          </div>
        </div>
        <div className='mt-10 lg:mt-0 lg:mx-auto w-2/3 xl:w-1/2'>
          <h3 className='text-sm text-primary mb-[19px] font-semibold'>
            Contact Us
          </h3>
          <div className='flex items-start gap-4 mb-[22px]'>
            <Image src='/tel.svg' width={12} height={12} alt='Tel Icon' />
            <span className='text-xs '>+234 6707653444</span>
          </div>
          <div className='flex items-start gap-4'>
            <Image
              src='/address.svg'
              width={13}
              height={15}
              alt='Address Icon'
            />
            <span className='text-xs '>
              27,Alara Street Yaba 100012 Lagos State
            </span>
          </div>
        </div>
      </div>
      <h4 className='mx-auto w-max mt-[53px] text-xs'>
        All rights reserved. © getlinked Ltd.
      </h4>
    </footer>
  );
};

export default Footer;
