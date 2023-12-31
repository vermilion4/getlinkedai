import ContactForm from "@/components/Contact/ContactForm";
import MobileContact from "@/components/Contact/MobileContact";
import Image from "next/image";

const Contact = () =>
{
  return (
    <section className="min-h-screen grid place-content-center mt-[120px] pt-[88px] pb-[115px] ">
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
        <MobileContact />
      </div>
      <div className="md:flex flex-col lg:flex-row gap-20 xl:gap-56 items-center hidden">
        <div className="">
          <h1 className="font-primary text-[32px] font-semibold mb-[17px] text-primary">Get in touch</h1>
          <div className="space-y-[22px] mb-[35px]">
            <p>Contact<br />Information</p>
            <p>27,Alara Street<br />
              Yaba 100012<br />
              Lagos State</p>
            <p>Call Us: 07067981819</p>
            <p>we are open from Monday-Friday<br />
              08:00am - 05:00pm</p>
          </div>
          <p className="text-primary mb-[14px]">Share on</p>
          <div className='flex items-center gap-4'>
            <Image
              src='/instagram.svg'
              width={ 24 }
              height={ 24 }
              alt='Instagram Icon'
            />
            <Image src='/x.svg' width={ 19 } height={ 17 } alt='X Icon' />
            <Image
              src='/facebook.svg'
              width={ 10.5 }
              height={ 20 }
              alt='Facebook Icon'
            />
            <Image
              src='/linkedin.svg'
              width={ 24 }
              height={ 24 }
              alt='Linkedin Icon'
            />
          </div>
        </div>
        <div className="">
          <div className="px-[90px] w-screen md:w-[80vw] max-w-[617px] py-[75px] rounded-xl bg-[rgba(255,255,255,0.03)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
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
            <h2 className="font-primary text-xl font-semibold text-primary">Questions or need assistance?</h2>
            <h2 className="font-primary text-xl font-semibold text-primary mb-[47px]">Let us know about it!</h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;