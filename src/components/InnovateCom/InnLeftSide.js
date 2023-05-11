import React from "react";
import { BsArrowRight } from "react-icons/bs";

const InnLeftSide = () => {
  return (
    <div className='w-[50%]'>
      <h2 className="text-7xl leading-relaxed font-serif">
      Innovate <br /> with Speed
      </h2>
      <h2 className="text-3xl leading-relaxed font-serif">
      Create higher quality <br /> software, deliver on <br /> customer expectations and <br /> business goals
      </h2>
      <h2 className='text-xl font-bold font-serif mt-8'>DevOps <BsArrowRight className='inline hover:translate-x-3 duration-300 text-3xl mx-6'></BsArrowRight></h2>
    </div>
  );
};

export default InnLeftSide;
