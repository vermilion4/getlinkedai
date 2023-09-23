import { judgingCriteria } from '@/data/judgingCriteria';
import Image from 'next/image';
import Button from '../Button';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    x: 1000,
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

const staggerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Judge = () => {
  return (
    <section className='w-full max-w-[1600px] pt-[78px] pb-20 border-b border-white border-opacity-[18%] relative'>
      <motion.div
        className='card-container'
        initial='offscreen'
        whileInView='onscreen'
        variants={staggerVariants}>
        <Image
          src='/purple-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute lg:top-10 lg:left-40  xl:left-80 w-[10px] h-3 sm:w-4 sm:h-5 sm:left-32 sm:top-10 lg:w-[20px] lg:h-[26px] top-5 left-56'
        />
        <div className='flex flex-col w-[80%] mx-auto lg:flex-row justify-between xl:w-full xl:mx-0 xl:pl-64 xl:pr-40 items-center lg:gap-[53px] relative'>
          <div className='basis-[50%]'>
            <Image
              src='/judge.png'
              width={490}
              height={477}
              alt='Judging criteria'
              className='w-[284px] h-[267px] lg:w-[400px] lg:h-[397px] 2xl:w-[710px] 2xl:h-[487px] animate-bounce-slow relative z-10'
            />
            <Image
              src='/gradient-circle.svg'
              width={134}
              height={134}
              alt='gradient circle decoration'
              className='w-[94px] h-[94px] lg:w-[104px] lg:h-[104px] xl:w-[134px] xl:h-[134px] animate-bounce-slow absolute top-32 hidden lg:block lg:left-[45px] xl:top-20 xl:left-[325px] z-0'
            />
            <Image
              src='/light-star.svg'
              alt='star icon'
              width={26}
              height={32}
              className='animate-pulse absolute lg:top-80 xl:top-72 lg:left-52 xl:left-[450px] 2xl:left-[520px] w-[10px] h-3 sm:w-4 sm:h-5 sm:left-96 sm:top-20 lg:w-[26px] lg:h-8 top-20 left-52 z-0'
            />
            <div className=' bg-secondary bg-blend-soft-light bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute -left-52 top-36 -z-10 bg-no-repeat'>
              {' '}
            </div>
          </div>
          <div className='basis-[50%] text-center lg:text-start lg:mt-[58px] mt-0 relative '>
            <h3 className='font-primary text-xl sm:text-3xl lg:text-[32px] mb-[21px]'>
              Judging Criteria <br />
              <span className='text-primary'>Key attributes</span>
            </h3>
            <div className='flex flex-col gap-7 mb-7 lg:mb-14'>
              {judgingCriteria.map(({ id, title, description }) => (
                <motion.div
                  className='card'
                  variants={cardVariants}
                  transition={{ delay: 1 }}
                  key={id}>
                  <h3 className='text-[13px] lg:text-sm leading-[27.76px]'>
                    <span className='text-[#FF26B9] text-sm lg:text-base font-bold'>
                      {title}:
                    </span>{' '}
                    {description}
                  </h3>
                </motion.div>
              ))}
            </div>

            <div>
              <Button text='Read More' mobile />
              <div className='pt-9 w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-auto lg:-ml-24 lg:-mt-16 '>
                <Image
                  src='/star.png'
                  alt='star icon'
                  width={26}
                  height={32}
                  className='animate-pulse'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-secondary bg-blend-soft-light bg-[url("/purple-flare-right.png")] lg:w-[501px] xl:w-[551px] h-[994px] w-[341px] absolute right-0 top-[800px] lg:top-96 -z-10 bg-no-repeat'>
          {' '}
        </div>
      </motion.div>
    </section>
  );
};

export default Judge;
