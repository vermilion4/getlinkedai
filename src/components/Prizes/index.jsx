import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
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

const Prizes = () => {
  return (
    <section className='w-screen pt-[78px] pb-40 bg-secondary bg-gradient-bg bg-blend-color-burn relative  max-w-[1600px]'>
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
          className='animate-pulse absolute lg:top-20 lg:left-40  xl:left-80 w-[10px] h-3 sm:w-4 sm:h-5 sm:left-32 sm:top-10 lg:w-[20px] lg:h-[26px] top-20 left-24'
        />
        <Image
          src='/purple-star.svg'
          alt='star icon'
          width={30}
          height={36}
          className='animate-pulse absolute lg:top-40 lg:right-40  xl:right-80 w-[10px] h-3 sm:w-4 sm:h-5 sm:right-32 sm:top-10 lg:w-[20px] lg:h-[26px] top-44 right-24 z-0'
        />
        <div className='w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-auto lg:mb-16 absolute top-[60%] md:top-[40%] z-20 right-28'>
          <Image
            src='/star.png'
            alt='star icon'
            width={26}
            height={32}
            className='animate-pulse'
          />
        </div>
        <div className='w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-auto lg:mb-16 absolute top-[50%] lg:top-[30%] z-20 right-[80%] lg:right-[50%]'>
          <Image
            src='/star.png'
            alt='star icon'
            width={26}
            height={32}
            className='animate-pulse'
          />
        </div>
        <div className='w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[16px] lg:h-[22px] ml-auto lg:mb-16 absolute bottom-[8%] z-20 left-[20%]'>
          <Image
            src='/star.png'
            alt='star icon'
            width={26}
            height={32}
            className='animate-pulse'
          />
        </div>
        <div className='w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[26px] lg:h-8 ml-auto lg:mb-16 absolute bottom-[6%] z-20 right-[23%]'>
          <Image
            src='/light-star.svg'
            alt='star icon'
            width={26}
            height={32}
            className='animate-pulse'
          />
        </div>
        <div className=' bg-blend-soft-light opacity-20 bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute left-0 top-0 z-10 bg-no-repeat'>
          {' '}
        </div>
        <div>
          <div className='flex'>
            <div className='lg:basis-[50%]'></div>
            <div className='w-[40%] mx-auto text-center lg:text-start '>
              <h3 className='font-primary text-xl sm:text-3xl lg:text-[32px] mb-4 '>
                Prizes and <br />
                <span className='text-primary'>Rewards</span>
              </h3>
              <p className='text-[13px] lg:text-sm leading-[27.5px] mb-[100px] lg:mb-[200px] relative z-10'>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>
          <div className='flex flex-col mx-auto lg:flex-row justify-between lg:w-[80vw] items-center gap-[53px] relative max-w-[1600px]'>
            <div className='basis-[45%]'>
              <Image
                src='/prize-2.png'
                width={548}
                height={472}
                alt='Prizes and rewards'
                className='w-[324px] h-[277px] lg:w-[350px] lg:h-[347px] xl:w-[548px] xl:h-[472px] animate-bounce-slow relative z-10 '
              />
            </div>
            <div className='basis-[55%] text-center lg:text-start mt-20 md:mt-48 lg:mt-16 xl:mt-28 relative'>
              <motion.div className='card' variants={cardVariants}>
                <div className='flex gap-3 md:gap-[30px] items-start relative bg-secondary'>
                  <div className=' bg-blend-soft-light bg-[url("/purple-flare-right.png")] lg:w-[301px] xl:w-[551px] h-[994px] absolute -right-40 -top-80 z-0 bg-no-repeat opacity-20'>
                    {' '}
                  </div>
                  <div className='px-2 md:px-[26px] lg:px-3 xl:px-[26px] pt-[41px] md:pt-[141px] lg:pt-[90px] xl:pt-[141px] pb-4 md:pb-[33px] text-center border border-primary bg-[rgba(212,52,254,0.12)] rounded-lg relative'>
                    <Image
                      src='/silver-medal.png'
                      alt='silver medal'
                      width={179}
                      height={180}
                      className='w-[75px] h-[76px] md:w-[179px] md:h-[180px] absolute lg:w-[149px] lg:h-[140px] xl:w-[179px] xl:h-[180px] -top-10 left-1 md:-top-20 md:left-[18px] xl:left-[18px] lg:left-0'
                    />
                    <h3 className='text-xs md:text-4xl lg:text-xl xl:text-4xl font-bold md:leading-[40.904px]'>
                      2nd
                    </h3>
                    <p className='text-xs md:text-2xl lg:text-xl xl:text-2xl font-semibold'>
                      Runner
                    </p>
                    <span className='text-sm md:text-[32px] md:leading-[69.248px] font-bold text-primary lg:text-[22px] xl:text-[32px]'>
                      N300,000
                    </span>
                  </div>
                  <div className='px-2 md:px-[26px] lg:px-4 xl:px-[26px] pt-[81px] lg:pt-[129px] md:pt-[149px] xl:pt-[149px] pb-3 md:pb-[23px] border border-[#903aff] bg-[rgba(144,58,255,0.12)] rounded-lg text-center relative'>
                    <Image
                      src='/gold-medal.png'
                      alt='gold medal'
                      width={296}
                      height={296}
                      className='absolute -top-10 md:-top-36 left-0 md:scale-150 scale-150'
                    />
                    <h3 className='text-xs md:text-4xl md:leading-[40.904px] font-bold'>
                      1st
                    </h3>
                    <p className='text-xs md:text-2xl font-semibold md:leading-[51.936px]'>
                      Runner
                    </p>
                    <span className='text-sm md:text-[32px] md:leading-[69.248px] font-bold text-[#903aff]'>
                      N400,000
                    </span>
                  </div>
                  <div className='px-2 md:px-[26px] lg:px-3 xl:px-[26px] pt-[41px] md:pt-[141px] lg:pt-[90px] xl:pt-[141px] pb-4 md:pb-[33px] text-center border border-primary bg-[rgba(212,52,254,0.12)] rounded-lg relative z-20'>
                    <Image
                      src='/bronze-medal.png'
                      alt='bronze medal'
                      width={179}
                      height={180}
                      className='w-[75px] h-[76px] md:w-[179px] md:h-[180px] absolute lg:w-[149px] lg:h-[140px] xl:w-[179px] xl:h-[180px] -top-10 left-1 md:-top-20 md:left-[18px] xl:left-[18px] lg:left-0'
                    />
                    <h3 className='text-xs md:text-4xl lg:text-xl xl:text-4xl font-bold md:leading-[40.904px]'>
                      3rd
                    </h3>
                    <p className='text-xs md:text-2xl lg:text-xl xl:text-2xl font-semibold'>
                      Runner
                    </p>
                    <span className='text-sm md:text-[32px] md:leading-[69.248px] font-bold text-primary lg:text-[22px] xl:text-[32px]'>
                      N150,000
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Prizes;
