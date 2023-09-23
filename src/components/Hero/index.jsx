import Image from 'next/image';
import { Unica_One } from 'next/font/google';
import Button from '../Button';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const unica = Unica_One({ subsets: ['latin'], weight: ['400'] });

const cardVariants = {
  offscreen: {
    y: 1000,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 4,
    },
  },
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('September 26, 2023 00:00:00');

    const interval = setInterval(() => {
      const now = new Date();

      const diff = targetDate - now;

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      if (diff < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='w-full max-w-[1600px] border-b border-white border-opacity-[18%] overflow-hidden mt-[90px] lg:mt-[125px] xl:mt-[148px] border-t'>
      <motion.div
        className='card-container'
        initial='offscreen'
        whileInView='onscreen'>
        {/* Top Text */}
        <motion.div className='card' variants={cardVariants}>
          <div className='flex flex-col-reverse sm:flex-row justify-between lg:pr-[75px] lg:pl-[185px] sm:pr-[45px] sm:pl-[100px] pt-8 mb-10 relative z-10'>
            <div className='pt-9 w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-32 sm:ml-0'>
              <Image
                src='/star.png'
                alt='star icon'
                width={26}
                height={32}
                className='animate-pulse'
              />
            </div>
            <div className='relative w-max mx-auto md:mx-0 z-20'>
              <h2 className='text-base sm:text-xl lg:text-3xl font-bold italic'>
                <TypeAnimation
                  sequence={[
                    'Igniting a Revolution in HR Innovation',
                    1000,
                    'Igniting a Revolution in HR Reorganization',
                    1000,
                    'Igniting a Revolution in HR Transformation',
                    1000,
                    'Igniting a Revolution in HR Alteration',
                    1000,
                  ]}
                  wrapper='span'
                  speed={30}
                  repeat={Infinity}
                />
              </h2>
              <Image
                src='/pink-curve.svg'
                alt='decorative curve'
                width={253}
                height={11.04}
                className='absolute -bottom-4 right-0 hidden lg:block'
              />
              <Image
                src='/pink-curve-mobile.svg'
                alt='decorative curve'
                width={115}
                height={7}
                className='absolute -bottom-2 right-0 lg:hidden'
              />
            </div>
          </div>

          {/* Main Hero */}
          <div className='flex flex-col lg:flex-row items-center justify-between lg:pl-16 xl:pl-[131px] relative text-center lg:text-start '>
            <div className='bg-secondary bg-blend-soft-light bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute -left-20 -top-80 z-0 bg-no-repeat overflow-hidden'>
              {' '}
            </div>

            <div className='relative z-20 mt-10 lg:mt-[79px]'>
              <h2 className='font-primary text-[32px] sm:text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[80px]'>
                <span className='relative'>
                  getlinked Tech
                  <Image
                    src='/creative.svg'
                    alt='creative bulb icon'
                    width={53}
                    height={73}
                    className='absolute -top-4 right-4 sm:right-8 xl:-top-14 xl:right-8 w-[18px] h-[26px] lg:w-[30px] lg:h-[35px] xl:w-[53px] xl:h-[73px]'
                  />
                  <Image
                    src='/light-star.svg'
                    alt='star icon'
                    width={26}
                    height={32}
                    className='animate-pulse absolute lg:-top-20 lg:-right-40 w-[10px] h-3 sm:w-4 sm:h-5 sm:-right-32 sm:top-10 lg:w-[26px] lg:h-8 -top-10 -right-20'
                  />
                </span>
                <div className='flex justify-center items-center lg:justify-start mb-[9px] xl:mb-0'>
                  <span>Hackathon </span>
                  <span className='text-primary'>1.0</span>
                  <Image
                    src='/chain.svg'
                    width={86}
                    height={86}
                    alt='chain icon'
                    className='w-[32.7px] h-[32.7px] xl:w-[86px] xl:h-[86px]'
                  />
                  <Image
                    src='/explosive.svg'
                    width={58}
                    height={58}
                    alt='explosive icon'
                    className='w-[22.1px] h-[22.1px] xl:w-[58px] xl:h-[58px]'
                  />
                </div>
              </h2>
              <p className='text-[13px] sm:text-base xl:text-xl w-[70%] mx-auto lg:mx-0 lg:w-[80%] mb-6 xl:mb-[41px]'>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Button text='Register' margin link='/register' />

              <div
                className={`flex justify-center lg:justify-start text-5xl xl:text-[64px] gap-7 relative ${unica.className} pb-[95px]`}>
                <div>
                  {timeLeft.hours}
                  <span className='text-sm'>H</span>
                </div>
                <div>
                  {timeLeft.minutes}
                  <span className='text-sm'>M</span>
                </div>
                <div>
                  {timeLeft.seconds}
                  <span className='text-sm'>S</span>
                </div>
                <Image
                  src='/light-star.svg'
                  alt='star icon'
                  width={26}
                  height={32}
                  className='animate-pulse absolute lg:-top-20 lg:right-40 w-[10px] h-3 sm:w-4 sm:h-5 sm:right-32 sm:-top-10 lg:w-[26px] lg:h-8 -top-10 right-20'
                />
              </div>
            </div>

            <div className='bg-secondary hidden lg:block bg-blend-soft-light bg-[url("/purple-flare-right.png")] lg:w-[301px] xl:w-[551px] h-[994px] absolute right-0 -top-48 z-0 overflow-hidden bg-no-repeat'>
              {' '}
            </div>
            <div className='relative'>
              <Image
                src='/man-with-vr.png'
                alt='Man with vr'
                width={828}
                height={715}
                className=' relative top-10 z-10 right-0 mix-blend-luminosity bg-blend-hard-light w-[419px] h-[362px] lg:w-[520px] lg:h-[473px] xl:w-[828px] xl:h-[715px]'
              />
              <Image
                src='/globe.png'
                alt='Globe'
                width={667}
                height={641}
                className='animate-spin-slow absolute top-10 right-10 bg-blend-hard-light z-20 overflow-hidden w-[338px] h-[324px] lg:w-[420px] lg:h-[420px] xl:w-[667px] xl:h-[641px]'
              />
            </div>
            <Image
              src='/matrix.svg'
              alt='matrix decoration'
              width={1064}
              height={715}
              className='absolute top-0 right-0 z-0'
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
