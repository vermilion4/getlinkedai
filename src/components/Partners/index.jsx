import Image from 'next/image';

const Partners = () => {
  return (
    <section className='max-w-[1600px] w-full mx-auto pt-[72px] pb-32 border-b border-white border-opacity-[18%] relative'>
      <Image
        src='/purple-star.svg'
        alt='star icon'
        width={30}
        height={36}
        className='animate-pulse absolute lg:top-52 lg:left-40  xl:left-80 w-[10px] h-3 sm:w-4 sm:h-5 sm:left-32 sm:top-10 lg:w-[20px] lg:h-[26px] top-[38%] left-24'
      />
      <Image
        src='/pink-star.svg'
        alt='star icon'
        width={21}
        height={25}
        className='animate-pulse absolute lg:top-[35%] left-[55%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[18px] lg:h-[22px] top-[45%]  z-0'
      />
      <div className='animate-pulse absolute lg:bottom-[20%] lg:left-[55%] w-[10px] h-3 sm:w-4 sm:h-5 lg:w-[21px] lg:h-[25px] left-[75%] bottom-[20%]  z-0'>
        <Image
          src='/star.png'
          alt='star icon'
          width={26}
          height={32}
          className='animate-pulse'
        />
      </div>
      <div className=' bg-secondary bg-blend-soft-light bg-[url("/purple-flare-left.png")] w-[951px] h-[994px] absolute -left-[500px] lg:-left-60 -top-60 -z-10 bg-no-repeat'>
        {' '}
      </div>
      <div>
        <h3 className='font-primary text-xl md:text-[32px] mb-3 text-center'>
          Partners and Sponsors
        </h3>
        <p className='text-sm leading-[24.136px] w-[70%] lg:w-[25%] text-center mx-auto mb-14 lg:mb-[91px]'>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>

        <div className='border border-primary rounded-[5px] w-[80%] mx-auto px-[47.5px] lg:px-[179px] lg:py-[144px] py-[38.21px] relative '>
          <div className=' bg-secondary bg-blend-hard-light bg-[url("/Purple-Lens-Flare.png")] w-[951px] h-[994px] absolute -right-[420px] top-[120px] -z-10 bg-no-repeat rotate-0'>
            {' '}
          </div>
          <div className='grid grid-cols-3 gap-x-[60px] gap-y-[22.79px]'>
            {[1, 2, 3, 4, 5, 6].map((id, index) => (
              <div
                key={index}
                className={`flex justify-center items-center gap-5 py-5 ${
                  [1, 2, 3].includes(id) &&
                  'border-b-4 pb-[25.73px] border-primary'
                } ${[1, 2, 4, 5].includes(id) && 'line-between'}`}>
                <Image
                  src={`/partner-${id}.png`}
                  width={180}
                  height={150}
                  alt={'partner logo'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
