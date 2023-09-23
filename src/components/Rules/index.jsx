import Image from 'next/image';
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

const Rules = () => {
  return (
    <motion.div
      className='card-container'
      initial='offscreen'
      whileInView='onscreen'>
      <section className='w-full max-w-[1600px] border-b border-white border-opacity-[18%] py-11'>
        <div className='flex flex-col w-[80%] mx-auto lg:flex-row-reverse justify-between xl:w-full xl:mx-0 xl:pl-64 xl:pr-[102px] items-center lg:gap-12 '>
          <div className='basis-[50%] relative'>
            <Image
              src='/rules.png'
              width={664}
              height={664}
              alt='The big idea'
              className='w-[394px] h-[382px] lg:w-[540px] lg:h-[500px] xl:w-[664px] xl:h-[554px] animate-bounce-slow z-10 relative'
            />
            <Image
              src='/gradient-circle.svg'
              width={134}
              height={134}
              alt='gradient circle decoration'
              className='w-[94px] h-[94px] lg:w-[104px] lg:h-[104px] xl:w-[134px] xl:h-[134px] animate-bounce-slow absolute top-0 hidden lg:block lg:right-[85px] xl:right-[105px] z-0'
            />
            <div className='bg-secondary bg-blend-soft-light bg-[url("/purple-flare-right.png")] lg:w-[301px] xl:w-[551px] h-[994px] absolute -right-40 overflow-hidden -top-48 -z-10 bg-no-repeat'>
              {' '}
            </div>
          </div>
          <div className='basis-[50%] text-center lg:text-start mt-[10px] lg:mt-0 relative'>
            <div className=' bg-secondary bg-blend-soft-light bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute -left-52 -top-96 -z-10 bg-no-repeat'>
              {' '}
            </div>
            <motion.div className='card' variants={cardVariants}>
              <h3 className='font-primary text-xl sm:text-3xl lg:text-[32px] mb-4 relative'>
                Rules and <br />
                <span className='text-primary'>Guidelines</span>
                <Image
                  src='/light-star.svg'
                  alt='star icon'
                  width={26}
                  height={32}
                  className='animate-pulse absolute lg:-top-10 lg:right-52 w-[10px] h-3 sm:w-4 sm:h-5 sm:right-32 sm:-top-10 lg:w-[26px] lg:h-8 -top-10 right-20'
                />
              </h3>
              <p className='text-[13px] lg:text-sm leading-[27.5px]'>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </motion.div>
            <div className='pt-9 w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-10 lg:ml-auto -mr-10  '>
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
      </section>
    </motion.div>
  );
};

export default Rules;
