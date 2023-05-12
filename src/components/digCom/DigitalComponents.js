import React from 'react';
import DigLeftSide from './DigLeftSide';
import DigRightSide from './DigRightSide';
import { BsArrowRight } from 'react-icons/bs';

const DigitalComponents = () => {
    return (
        <>
        <div className='hidden lg:block '>
            <div className=' flex w-[60%] my-4 mx-auto'>
            <DigLeftSide></DigLeftSide>
            <DigRightSide></DigRightSide>
            </div>
        </div>
        <div className="lg:hidden p-2 mb-8 mx-4">
        <h2 className="text-[36px] font-serif my-6">
      Make Bolder Choices
      </h2>
      <img className='w-full mt-8 h-auto my-auto' src="https://www.xivtech.io./p1.png" alt="" />

      <h2 className="text-xl leading-relaxed font-serif mt-3">
      Digital focused strategies to realize market-changing ideas
      </h2>
      <h2 className='text-xl text-blue-500 cursor-pointer font-bold font-serif mt-8'>Build Better Apps <BsArrowRight className='inline text-black hover:translate-x-3 duration-300 text-3xl mx-6'></BsArrowRight></h2>
        </div>
        </>
    );
};

export default DigitalComponents;