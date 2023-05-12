import React from 'react';
import img from '../../assets/p2.jpg';

const InRightSide = () => {
    return (
        <div className='w-[50%]'>
        <img className='w-[95%] object-cover h-[95%]' src={img} alt="" />
    </div>
    );
};

export default InRightSide;