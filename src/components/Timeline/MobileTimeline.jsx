import { timeline } from '@/data/timeline';

const MobileTimeline = () => {
  return (
    <div className='flex flex-col gap-[27px]'>
      {timeline.map(({ id, title, date, description }) => (
        <div key={id} className='flex gap-[27px] mx-auto w-[80%] items-center'>
          <div className='flex flex-col items-center gap-2'>
            <hr className='w-[2px] bg-primary rotate-180 h-[77px]' />
            <div className='w-[19.32px] h-[19.32px] bg-gradient-primary rounded-full flex items-center justify-center text-xs font-bold'>
              {id}
            </div>
          </div>
          <div>
            <div>
              <h3 className='text-primary text-xs mb-2 font-bold'>{title}</h3>
              <p className='text-xs leading-[20.508px]'>{description}</p>
            </div>

            <div>
              <h3 className='text-primary text-xs mb-2 font-bold'>{date}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTimeline;
