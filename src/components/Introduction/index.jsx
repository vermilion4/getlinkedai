import Image from 'next/image';

const Introduction = () => {
  return (
    <section className='w-full max-w-[1600px] pt-[62px] pb-[78px] border-b border-white border-opacity-[18%]'>
      <div className='flex flex-col w-[80%] mx-auto lg:flex-row justify-between xl:w-full xl:mx-0 xl:pl-64 xl:pr-40 items-center relative'>
        <div className='basis-[50%] relative'>
          <div className='relative'>
            <Image
              src='/idea.png'
              width={490}
              height={477}
              alt='The big idea'
              className='w-[264px] h-[257px] lg:w-[400px] lg:h-[397px] 2xl:w-[490px] 2xl:h-[477px] animate-bounce-slow'
            />
            <span className='text-sm xl:text-2xl font-bold absolute top-[80px] lg:top-36 xl:top-28 2xl:top-36 left-[101.5px] lg:left-40 lg:text-xl xl:left-[150px] 2xl:left-[194px] text-center animate-ping-slow'>
              The Big
              <br /> Idea!
            </span>
          </div>
          <Image
            src='/pink-star.svg'
            alt='star icon'
            width={21}
            height={25}
            className='animate-pulse absolute lg:top-20 lg:left-0 w-[10px] h-3 sm:w-4 sm:h-5 sm:top-10 lg:w-[21px] lg:h-[25px] -top-10 -left-10 -z-10'
          />
          <Image
            src='/arrow.svg'
            alt='arrow icon'
            width={50}
            height={58}
            className='absolute sm:bottom-12 md:bottom-0 right-[45%] sm:-right-20 lg:right-14 w-5 h-[22px] sm:w-[50px] sm:h-[58px] -z-10 animate-bounce'
          />
        </div>
        <div className='basis-[50%] text-center lg:text-start mt-[58px] lg:mt-0'>
          <h3 className='font-primary text-xl sm:text-3xl lg:text-[32px] mb-4 relative'>
            Introduction to getlinked <br />
            <span className='text-primary'>tech Hackathon 1.0</span>
            <Image
              src='/purple-star.svg'
              alt='star icon'
              width={30}
              height={36}
              className='animate-pulse absolute lg:top-5 lg:-right-14 xl:right-10 w-[10px] h-3 sm:w-4 sm:h-5 sm:right-18 sm:top-10 lg:w-[20px] lg:h-[26px] top-5 right-10'
            />
          </h3>
          <p className='text-[13px] lg:text-sm leading-[27.5px]'>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
