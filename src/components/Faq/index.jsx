import Image from 'next/image';
import Accordion from './Accordion';

const Faq = () => {
  return (
    <section className='w-full max-w-[1600px] border-b border-white border-opacity-[18%] py-[60px] lg:pt-48 lg:pb-20 relative'>
      <div className='w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-auto lg:mb-16 absolute bottom-10 right-40'>
        <Image
          src='/star.png'
          alt='star icon'
          width={26}
          height={32}
          className='animate-pulse'
        />
      </div>
      <Image
        src='/purple-star.svg'
        alt='star icon'
        width={30}
        height={36}
        className='animate-pulse absolute lg:top-32 lg:left-20 xl:left-52 w-[18px] h-[22px] sm:w-4 sm:h-5 sm:left-32 sm:top-10 lg:w-[20px] lg:h-[26px] top-10 left-20'
      />
      <div className='flex flex-col-reverse w-[80%] mx-auto lg:flex-row-reverse justify-between xl:w-full xl:mx-0 xl:pl-64 xl:pr-[102px] items-center lg:gap-12'>
        <div className='basis-[50%] relative'>
          <Image
            src='/faq.png'
            width={741}
            height={741}
            alt='faq image'
            className='w-[294px] h-[282px] lg:w-[494px] lg:h-[462px] xl:w-[741px] xl:h-[541px] 2xl:h-[641px] anim  z-10 relative animate-bounce-slow'
          />
          <Image
            src='/light-star.svg'
            alt='star icon'
            width={26}
            height={32}
            className='animate-pulse absolute lg:top-52 xl:top-60 lg:-left-5 2xl:left-[40px] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 top-40 -left-10 z-0'
          />
          <Image
            src='/main-question-mark.svg'
            alt='question mark icon'
            width={94}
            height={51}
            className='absolute -top-32 lg:-top-40 left-[25%] w-32 h-32 lg:w-[194px] lg:h-[151px] animate-bounce-slow'
          />
          <Image
            src='/pink-star.svg'
            alt='star icon'
            width={21}
            height={25}
            className='animate-pulse absolute lg:top-20 lg:left-[70px] w-[10px] h-3 sm:w-4 sm:h-5 sm:top-10 lg:w-[21px] lg:h-[25px] top-20 left-10 z-0'
          />
          <Image
            src='/sub-question-mark.svg'
            alt='question mark icon'
            width={74}
            height={31}
            className='absolute -top-20 xl:-top-20 lg:-top-32 -left-10 2xl:-left-[40px] w-24 h-24 lg:w-[174px] lg:h-[131px] animate-bounce-slow'
          />
          <Image
            src='/pink-star.svg'
            alt='star icon'
            width={21}
            height={25}
            className='animate-pulse absolute lg:-top-10 lg:right-[120px] xl:right-[210px] 2xl:right-[270px] w-[10px] h-3 sm:w-4 sm:h-5  lg:w-[21px] lg:h-[25px] -top-10 right-20 z-0'
          />
          <Image
            src='/sub-question-mark.svg'
            alt='question mark icon'
            width={74}
            height={31}
            className='absolute -top-20 lg:-top-32 xl:-top-20 -right-[20px] lg:-right-[35px] xl:right-[10px] 2xl:right-[40px] w-24 h-24 lg:w-[174px] lg:h-[131px] animate-bounce-slow'
          />
        </div>
        <div className='basis-[50%] text-center lg:text-start mt-[10px] lg:mt-0 relative  mb-52 lg:mb-0'>
          <h3 className='font-primary text-xl sm:text-3xl lg:text-[32px] mb-4'>
            Frequently Ask <br />
            <span className='text-primary'>Question</span>
          </h3>
          <p className='text-[13px] lg:text-sm leading-[27.5px] mb-[68px]'>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
