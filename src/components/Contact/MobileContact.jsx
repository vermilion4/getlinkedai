import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';
import ContactForm from './ContactForm';

const MobileContact = () => {
  const router = useRouter();
  return (
    <section className='bg-secondary px-[49px] py-[47px] w-screen min-h-screen absolute top-0 left-0 z-[1000]'>
      <Image
        src='/pink-star.svg'
        alt='star icon'
        width={21}
        height={25}
        className='animate-pulse absolute lg:top-80 lg:left-20 w-[10px] h-3 sm:w-4 sm:h-5 sm:top-10 lg:w-[21px] lg:h-[25px] top-40 left-10 z-[1001]'
      />
      <Image
        src='/light-star.svg'
        alt='star icon'
        width={21}
        height={25}
        className='animate-pulse absolute lg:-bottom-80 lg:left-32 w-[10px] h-3 sm:w-4 sm:h-5 sm:bottom-10 lg:w-[21px] lg:h-[25px] bottom-40 left-10 z-[1001]'
      />
      <Image
        src='/purple-star.svg'
        alt='star icon'
        width={21}
        height={25}
        className='animate-pulse absolute lg:-bottom-40 lg:left-[500px] w-[10px] h-3 sm:w-4 sm:h-5 sm:bottom-10 lg:w-[21px] lg:h-[25px] bottom-40 right-10 z-[1001]'
      />
      <div className='mb-[41px] cursor-pointer' onClick={() => router.back()}>
        <Image src='/back.svg' alt='history icon' width={23} height={23} />
      </div>
      <h2 className='font-primary text-xl font-semibold text-primary'>
        Questions or need assistance?
      </h2>
      <h2 className='font-primary text-xl font-semibold text-primary mb-6'>
        Let us know about it!
      </h2>
      <p className='mb-[30px] text-xs'>
        Email us below to any question related to our event
      </p>
      <ContactForm />
      <div className='mx-auto mt-[41px] text-center w-max'>
        <p className='text-primary mb-[14px]'>Share on</p>
        <div className='flex items-center gap-4'>
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
    </section>
  );
};

export default MobileContact;
