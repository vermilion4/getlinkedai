import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';

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
      <form action='' className='mb-[41px]'>
        <div className='flex flex-col gap-[42px] mb-[31px]'>
          <div className=''>
            <input
              type='text'
              name='name'
              id='name'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
              placeholder='First Name'
              required
            />
          </div>
          <div className=''>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
              placeholder='Mail'
              required
            />
          </div>
          <div className=''>
            <input
              type='text'
              name='phone'
              id='phone'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
              placeholder='Phone Number'
              required
            />
          </div>
          <div className=''>
            <textarea
              name='message'
              id='message'
              cols='10'
              rows='5'
              className='bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full'
              placeholder='Message'></textarea>
          </div>
        </div>
        <div className='mx-auto w-max'>
          <Button text='Submit' />
        </div>
      </form>
      <div className='mx-auto text-center w-max'>
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
