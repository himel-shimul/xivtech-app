import React from 'react';
import DigLeftSide from './DigLeftSide';
import DigRightSide from './DigRightSide';

const DigitalComponents = () => {
    return (
        <div className='flex w-[60%] my-4 mx-auto'>
            <DigLeftSide></DigLeftSide>
            <DigRightSide></DigRightSide>
        </div>
    );
};

export default DigitalComponents;