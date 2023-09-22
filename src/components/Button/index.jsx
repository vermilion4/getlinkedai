const Button = ({ text, margin, mobile, link, full }) => {
  return (
    <button
      className={`bg-gradient-primary rounded ${
        mobile &&
        'px-[14px] text-xs pt-2 pb-[11.35px] lg:text-base lg:px-[52px] lg:pt-4 lg:pb-[17px]'
      } px-[52px] pt-4 pb-[17px] ${margin && 'mb-[77px]'} ${
        full && 'w-full'
      } hover:scale-105 ease-in duration-300 hover:bg-gradient-reverse`}>
      {link ? <a href={link}>{text}</a> : text}
    </button>
  );
};

export default Button;
