import React from "react";
import InnLeftSide from "./InnLeftSide";
import InRightSide from "./InRightSide";
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/p2.jpg';

const InnovatComponent = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <div className="flex w-[65%] my-6 mx-auto">
          <InnLeftSide></InnLeftSide>
          <InRightSide></InRightSide>
        </div>
      </div>
      <div className="lg:hidden p-2 mb-8  mx-4">
        <h2 className="text-[38px] leading-relaxed font-serif">
          Innovate with Speed
        </h2>
        <img className='w-full mt-8 h-auto my-auto' src={img} alt="" />
        <h2 className="text-xl leading-relaxed font-serif mt-3">
          Create higher quality software, deliver on customer
          expectations and business goals
        </h2>
        <h2 className="text-xl text-blue-500 cursor-pointer font-bold font-serif mt-8">
          DevOps{" "}
          <BsArrowRight className="inline text-black hover:translate-x-3 duration-300 text-3xl mx-6"></BsArrowRight>
        </h2>
      </div>
    </>
  );
};

export default InnovatComponent;
