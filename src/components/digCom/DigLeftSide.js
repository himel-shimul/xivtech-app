import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const DigLeftSide = () => {
    return (
        <div className='w-[50%]'>
      <h2 className="text-7xl leading-relaxed font-serif">
      Make <br /> Bolder <br /> Choices
      </h2>
      <h2 className="text-3xl leading-relaxed font-serif">
      Digital focused strategies to <br /> realize market-changing ideas
      </h2>
      <h2 className='text-xl font-bold font-serif mt-8 cursor-pointer'>Build Better Apps <BsArrowRight className='inline hover:translate-x-3 duration-300  text-3xl mx-6'></BsArrowRight></h2>
    </div>
    );
};

export default DigLeftSide;