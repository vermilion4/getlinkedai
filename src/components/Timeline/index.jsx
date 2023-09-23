import { timeline } from '@/data/timeline';
import MobileTimeline from './MobileTimeline';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const Timeline = () => {
  return (
    <section
      id='timeline'
      className='max-w-[1600px] w-full mx-auto pt-[72px] pb-[109px] relative'>
      <motion.div
        className='card-container'
        initial='offscreen'
        whileInView='onscreen'>
        {/* Start of star icons */}
        <Image
          src='/purple-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute lg:top-52 lg:left-40  xl:left-80 w-[10px] h-3 sm:w-4 sm:h-5 sm:left-32 sm:top-10 lg:w-[20px] lg:h-[26px] top-44 left-24'
        />
        <Image
          src='/light-star.svg'
          alt='star icon'
          width={26}
          height={32}
          className='animate-pulse absolute lg:bottom-52 xl:bottom-40 lg:left-5 2xl:left-[40px] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 bottom-10 left-10 z-0'
        />

        <div className='w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-auto lg:mb-16 absolute top-[50%] right-40'>
          <Image
            src='/star.png'
            alt='star icon'
            width={26}
            height={32}
            className='animate-pulse'
          />
        </div>
        {/* End of star icons */}
        <div>
          <h3 className='font-primary text-xl md:text-[32px] mb-3 text-center'>
            Timeline
          </h3>
          <p className='text-sm leading-[24.136px] w-[70%] lg:w-[25%] text-center mx-auto mb-14 lg:mb-[91px]'>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <div className='lg:flex flex-col gap-5 hidden'>
            <motion.div className='card' variants={cardVariants}>
              {timeline.map(({ id, title, date, description }) => (
                <div
                  key={id}
                  className='flex even:flex-row-reverse justify-between gap-[107px] mx-auto w-[70%] items-end group'>
                  <div className='text-end basis-[40%] group-even:text-start'>
                    <h3 className='text-primary text-2xl mb-3 font-bold'>
                      {title}
                    </h3>
                    <p className='text-sm leading-[23.926px]'>{description}</p>
                  </div>
                  <div className='flex flex-col items-center gap-[11px]'>
                    <hr className='w-1 bg-primary rotate-180 h-[137px]' />
                    <div className='w-[53px] h-[53px] bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold'>
                      {id}
                    </div>
                  </div>
                  <div className='text-start basis-[40%] group-even:text-end'>
                    <h3 className='text-primary text-2xl mb-3 font-bold'>
                      {date}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className='lg:hidden'>
            <MobileTimeline cardVariants={cardVariants} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
