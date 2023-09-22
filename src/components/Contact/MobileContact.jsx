import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';
import ContactForm from './ContactForm';

const MobileContact = () => {
  const router = useRouter();
  return (
    <section className='bg-secondary px-[49px] py-[47px] w-screen min-h-screen absolute top-0 left-0 z-[1000]'>
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
