import { faq } from '@/data/faq';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Accordion({ cardVariants }) {
  const [isOpenArray, setIsOpenArray] = useState(Array(faq.length).fill(false));

  const toggleAccordion = (index) => {
    const updatedIsOpenArray = isOpenArray.map((item, i) =>
      i === index ? !item : false
    );
    setIsOpenArray(updatedIsOpenArray);
  };

  return (
    <div>
      {faq.map(({ id, question, answer }, index) => (
        <motion.div
          className='card'
          variants={cardVariants}
          transition={{ delay: 1 }}
          key={id}>
          <div>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => toggleAccordion(index)}>
              <h3 className='text-sm text-start leading-[27.5px]'>
                {question}
              </h3>
              <button aria-label='toggle' className={'cursor-pointer'}>
                <Image
                  src='/plus.svg'
                  alt='plus icon'
                  width={20}
                  height={20}
                  className={`transition-all ease-in duration-300 ${
                    isOpenArray[index] ? 'rotate-45' : ''
                  }`}
                />
              </button>
            </div>
            <div
              className={`transition-all ease-in duration-300 ${
                isOpenArray[index] ? 'max-h-96' : 'max-h-0 overflow-hidden'
              }`}>
              <p className='text-start text-base leading-6 text-gray-300 mt-4 w-11/12'>
                {answer}
              </p>
            </div>
            <hr className='mt-[13px] mb-[25px] border border-primary' />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Accordion;
