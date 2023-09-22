import Button from "@/components/Button";
import ContactForm from "@/components/Contact/ContactForm";
import MobileContact from "@/components/Contact/MobileContact";
import Image from "next/image";

const Contact = () =>
{
  return (
    <section className="min-h-screen grid place-content-center mt-[120px] pt-[88px] pb-[115px] overflow-hidden">
      <div className=' bg-secondary bg-blend-soft-light bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute -left-60 top-[75px] -z-10 bg-no-repeat'>
        { ' ' }
      </div>
      <div className=' bg-secondary bg-blend-hard-light bg-[url("/Purple-Lens-Flare.png")] w-[951px] h-[994px] absolute -right-[420px] top-[120px] -z-10 bg-no-repeat rotate-0 hidden md:block'>
        { ' ' }
      </div>
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
            <h2 className="font-primary text-xl font-semibold text-primary">Questions or need assistance?</h2>
            <h2 className="font-primary text-xl font-semibold text-primary mb-[47px]">Let us know about it!</h2>

            {/* <form action="">
              <div className="flex flex-col gap-[42px] mb-[31px]">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full"
                    placeholder="Mail"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="">
                  <textarea name="message" id="message" cols="10" rows="5" className="bg-[rgba(255,255,255,0.03)] border border-white rounded px-[29px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[13px] placeholder:text-white w-full" placeholder="Message">

                  </textarea>

                </div>
              </div>
              <div className="mx-auto w-max">
                <Button text="Submit" />
              </div>
            </form> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;