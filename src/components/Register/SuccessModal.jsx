import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';

const SuccessModal = ({ setShowSuccess }) => {
  const router = useRouter();
  return (
    <section className='bg-[rgba(21,14,40,0.93)] fixed w-screen h-screen top-0 left-0 z-[10002] grid place-content-center'>
      <div className='flex flex-col items-center gap-[33px] border border-primary rounded-[5px] py-9'>
        <div className='flex relative -ml-20'>
          <Image
            src='/success.png'
            alt='success icon'
            width={288}
            height={288}
            className='w-[150px] lg:w-[288px] animate-bounce-slow'
          />
          <Image
            src='/success-man.png'
            alt='success icon'
            width={305}
            height={305}
            className='absolute top-7 left-14 lg:left-28 animate-bounce-slow'
          />
        </div>
        <h2 className='text-base lg:text-[32px] font-semibold w-2/3 text-center mx-auto leading-normal'>
          Congratulations you have successfully Registered!
        </h2>
        <p className='w-[40%] text-center text-sm lg:mb-[38px]'>
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <div
          className='w-[80%]'
          onClick={() => {
            router.back();
            setShowSuccess(false);
          }}>
          <Button text='Back' full />
        </div>
      </div>
    </section>
  );
};

export default SuccessModal;
