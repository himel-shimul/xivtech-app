import React from "react";
import EmLeftSide from "./EmLeftSide";
import EmRightSide from "./EmRightSide";
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/p3.jpg';

const EmbraceComponent = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <div className="flex w-[65%] my-6 mx-auto">
          <EmLeftSide></EmLeftSide>
          <EmRightSide></EmRightSide>
        </div>
      </div>
      <div className="lg:hidden p-2 mb-8 mx-4">
        <h2 className="text-[38px] leading-relaxed font-serif my-6">
          Embrace Cloud
        </h2>
        <img className='w-full h-auto my-auto' src={img} alt="" />
        <h2 className="text-xl leading-relaxed font-serif mt-3">
          With Cloud-First accelerate innovation and optimize performance
        </h2>

        <h2 className="text-xl text-blue-500 cursor-pointer font-bold font-serif mt-8">
          Cloud Services{" "}
          <BsArrowRight className="inline text-black hover:translate-x-3 duration-300 text-3xl mx-6"></BsArrowRight>
        </h2>
      </div>
    </>
  );
};

export default EmbraceComponent;
