
import MobileRegister from "@/components/Register/MobileRegister";
import RegisterForm from "@/components/Register/RegisterForm";
import SuccessModal from "@/components/Register/SuccessModal";
import Image from "next/image";
import { useState } from "react";

const Register = () =>
{
  const [showSuccess, setShowSuccess] = useState(false);


  return (
    <section className="min-h-screen grid place-content-center mt-[120px] pt-[88px] pb-[115px] max-w-[1600px] w-[90vw] ">
      { showSuccess && <SuccessModal setShowSuccess={ setShowSuccess } /> }
      <div className=' bg-secondary bg-blend-soft-light bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute -left-60 top-[75px] -z-10 bg-no-repeat hidden md:block'>
        { ' ' }
      </div>
      <div className=' bg-secondary bg-blend-hard-light bg-[url("/Purple-Lens-Flare.png")] w-[951px] h-[994px] absolute right-[0px] top-[120px] -z-10 bg-no-repeat rotate-0 hidden md:block'>
        { ' ' }
      </div>
      <Image
        src='/pink-star.svg'
        alt='star icon'
        width={ 21 }
        height={ 25 }
        className='animate-pulse absolute lg:top-80 lg:left-20 w-[10px] h-3 sm:w-4 sm:h-5 sm:top-10 lg:w-[21px] lg:h-[25px] -top-10 -left-10 z-10'
      />
      <Image
        src='/light-star.svg'
        alt='star icon'
        width={ 21 }
        height={ 25 }
        className='animate-pulse absolute lg:-bottom-80 lg:left-32 w-[10px] h-3 sm:w-4 sm:h-5 sm:bottom-10 lg:w-[21px] lg:h-[25px] -bottom-10 -left-10 z-10'
      />
      <Image
        src='/purple-star.svg'
        alt='star icon'
        width={ 21 }
        height={ 25 }
        className='animate-pulse absolute lg:-bottom-40 lg:left-[500px] w-[10px] h-3 sm:w-4 sm:h-5 sm:bottom-10 lg:w-[21px] lg:h-[25px] -bottom-10 -left-10 z-10'
      />
      <div className="block md:hidden">
        <MobileRegister />
      </div>
      <div className="md:flex flex-col lg:flex-row gap-20 xl:gap-56 items-center hidden">
        <div className="">
          <Image src="/register.png" alt="registration icon" width={ 717 } height={ 717 } className="w-96 h-96 animate-bounce-slow" />
        </div>
        <div className="">
          <div className="px-[80px] w-screen md:w-[80vw] max-w-[740px] py-[75px] rounded-xl bg-[rgba(255,255,255,0.03)] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <Image
              src='/light-star.svg'
              alt='star icon'
              width={ 21 }
              height={ 25 }
              className='animate-pulse absolute lg:top-10 lg:right-60 w-[10px] h-3 sm:w-4 sm:h-5 sm:top-10 lg:w-[21px] lg:h-[25px] -top-10 -right-10 z-10'
            />
            <Image
              src='/star.png'
              alt='star icon'
              width={ 21 }
              height={ 25 }
              className='animate-pulse absolute lg:-bottom-2 lg:right-60 w-[10px] h-3  sm:bottom-10 -bottom-10 -right-10 z-10'
            />

            <h2 className="font-primary text-[32px] font-semibold text-primary mb-[47px]">Register</h2>
            <div className="mb-[19px] flex items-end gap-[7px] relative w-max">
              <span className="text-sm">Be part of this movement!</span>
              <hr className="w-[101px] border-dotted border border-primary" />
              <Image src='/girl-walk.svg' width={ 26 } height={ 26 } alt="girl walking" className="absolute right-14 bottom-1" />
              <Image src='/boy-walk.svg' width={ 30 } height={ 30 } alt="boy walking" className="absolute right-7 bottom-1" />
            </div>
            <h2 className="mb-[33px] text-2xl">CREATE YOUR ACCOUNT</h2>

            <RegisterForm setShowSuccess={ setShowSuccess } />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;