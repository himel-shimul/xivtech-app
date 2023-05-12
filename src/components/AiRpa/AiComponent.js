import React from "react";
import AiLeftSide from "./AiLeftSide";
import AiRightSide from "./AiRightSide";
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/rp2.jpg';

const AiComponent = () => {
  return (
    <>
      <div className="hidden lg:block ">
      <div className="flex w-[60%] my-4 mx-auto">
        <AiLeftSide></AiLeftSide>
        <AiRightSide></AiRightSide>
      </div>
      </div>
      <div className="lg:hidden p-2 mb-8 mx-4">
        <h2 className="text-[38px] leading-relaxed font-serif">
          AI + RPA is what we do
        </h2>
        <img className='w-full mt-8 h-auto my-auto' src={img} alt="" />
        <h2 className="text-xl leading-relaxed font-serif mt-3">
          Future-Proof your business. Drive efficiency, profitability{" "}
          and deliver on customer experience
        </h2>
        <h2 className="text-xl text-blue-500 cursor-pointer font-bold font-serif mt-8">
          AI + RPA Automation{" "}
          <BsArrowRight className="inline text-black hover:translate-x-3 duration-300 text-3xl mx-6"></BsArrowRight>
        </h2>
      </div>
    </>
  );
};

export default AiComponent;
