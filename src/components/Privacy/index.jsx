import Image from 'next/image';
import Button from '../Button';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    x: -1000,
  },
  onscreen: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 4,
    },
  },
};

const Privacy = () => {
  return (
    <section
      id='privacy'
      className='w-full max-w-[1600px] py-[60px] lg:py-40 relative'>
      <motion.div
        className='card-container'
        initial='offscreen'
        whileInView='onscreen'>
        <Image
          src='/purple-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute bottom-[30%] left-[7%] w-[10px] h-3 sm:w-4 sm:h-5  lg:w-[20px] lg:h-[26px] z-20'
        />
        <Image
          src='/purple-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute top-[20%] left-[50%] w-[10px] h-3 sm:w-4 sm:h-5  lg:w-[15px] lg:h-[21px]  z-20'
        />
        <Image
          src='/light-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute top-[12%] left-[35%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[20px] lg:h-[26px]  z-20'
        />
        <Image
          src='/star.png'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute top-[20%] right-[20%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[11px] lg:h-[10px] z-0'
        />
        <Image
          src='/light-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute lg:bottom-[30%] lg:right-[7%] w-[10px] h-3 sm:w-4 sm:h-5 sm:right-32 sm:bottom-10 lg:w-[20px] lg:h-[26px] bottom-[38%] right-24 z-20'
        />
        <Image
          src='/star.png'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute top-[70%] right-[40%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[11px] lg:h-[10px] z-0'
        />
        <Image
          src='/pink-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute top-[60%] right-[35%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[11px] lg:h-[10px] z-0'
        />
        <div className='flex flex-col-reverse w-[80%] mx-auto lg:flex-row-reverse justify-between xl:w-full xl:mx-0 xl:pl-48 xl:pr-[102px] items-center lg:gap-[103px]'>
          <div className='basis-[50%] relative'>
            <Image
              src='/shield.png'
              width={530}
              height={648}
              alt='privacy shield'
              className='w-[294px] h-[382px] lg:w-[304px] lg:h-[362px] xl:w-[530px] xl:h-[648px] 2xl:h-[641px] z-10 relative mt-10 md:mt-0 animate-bounce-slow'
            />
            <Image
              src='/privacy.png'
              width={559}
              height={749}
              alt='privacy shield'
              className='w-[294px] h-[282px] lg:w-[404px] lg:h-[362px] xl:w-[659px] xl:h-[649px] 2xl:h-[541px]  z-20 top-32 md:top-20 lg:top-28 xl:top-52 -left-10 absolute mt-10 lg:mt-0 animate-bounce-slow'
            />
          </div>
          <div className='basis-[50%] text-center lg:text-start mt-[10px] lg:mt-0 relative  mb-20 lg:mb-0 '>
            <div className=' bg-secondary bg-blend-hard-light bg-[url("/Purple-Lens-Flare.png")] w-[951px] h-[994px] absolute -left-[420px] top-[320px] -z-10 bg-no-repeat rotate-90'>
              {' '}
            </div>
            <h3 className='font-primary text-xl sm:text-3xl lg:text-[32px] mb-4'>
              Privacy Policy and <br />
              <span className='text-primary'>Terms</span>
            </h3>
            <p className='text-sm leading-[27.5px] opacity-75 mt-[17px] mb-[30px]'>
              Last updated on September 12, 2023
            </p>
            <p className='text-[13px] lg:text-sm leading-[27.5px] mb-[69px]'>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <motion.div className='card' variants={cardVariants}>
              <div className='border border-primary rounded-[5px] bg-[rgba(217,217,217,0.03)] px-[15px] lg:px-8 xl:px-[72px] py-[59px] text-sm'>
                <p className='leading-[30.296px] mb-6'>
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <h4 className='text-primary text-start sm:text-center lg:text-start text-base font-bold leading-[34.624px]'>
                  Licensing Policy
                </h4>
                <p className='font-bold leading-[30.296px] mb-[18px] text-start sm:text-center lg:text-start'>
                  Here are terms of our Standard License:
                </p>
                <ul className='flex flex-col gap-[18px] mb-4 text-start sm:text-center lg:text-start'>
                  <li className='leading-[30.296px] flex gap-[14px] items-start'>
                    <span className='mt-2'>
                      <Image
                        src='/check.svg'
                        alt='check icon'
                        width={30}
                        height={30}
                        className='sm:w-[20px] sm:h-[20px] lg:w-[40px]'
                      />
                    </span>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </li>
                  <li className='leading-[30.296px] flex gap-[14px] items-start'>
                    <span className='mt-2'>
                      <Image
                        src='/check.svg'
                        alt='check icon'
                        width={30}
                        height={30}
                        className='sm:w-[20px] sm:h-[20px] lg:w-[40px]'
                      />
                    </span>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </li>
                </ul>
                <div className='mx-auto w-max'>
                  <Button text='Read More' mobile />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Privacy;
