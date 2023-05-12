import React from 'react';
import img from '../../assets/rp2.jpg';

const AiRightSide = () => {
    return (
        <div className='w-[50%]'>
            <img className='w-[95%] object-cover h-[95%] ' src={img} alt="" />
        </div>
    );
};

export default AiRightSide;