import React from 'react';
import AiLeftSide from './AiLeftSide';
import AiRightSide from './AiRightSide';

const AiComponent = () => {
    return (
        <div className='flex w-[60%] my-4 mx-auto'>
            <AiLeftSide></AiLeftSide>
            <AiRightSide></AiRightSide>
        </div>
    );
};

export default AiComponent;