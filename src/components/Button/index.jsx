import { useRouter } from 'next/router';

const Button = ({ text, margin, mobile, link, full }) => {
  const router = useRouter();

  // Check if the link matches the current route
  const isActive = link === router.pathname;

  // Define the classNames based on isActive
  const buttonClasses = `rounded ${
    isActive
      ? 'bg-gradient-trans border-primary border'
      : 'bg-gradient-primary border-transparent'
  } ${
    mobile &&
    'px-[14px] text-xs pt-2 pb-[11.35px] lg:text-base lg:px-[52px] lg:pt-4 lg:pb-[17px]'
  } pt-4 pb-[17px] ${margin && 'mb-[77px]'} ${
    full && 'w-full'
  } hover:scale-105 ease-in duration-300 hover:bg-gradient-trans hover:border hover:border-primary`;

  return (
    <button className={buttonClasses}>
      {link ? (
        <a className='px-[52px] pt-4 pb-[17px]' href={link}>
          {text}
        </a>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
