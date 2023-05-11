import React from 'react';
import EmLeftSide from './EmLeftSide';
import EmRightSide from './EmRightSide';

const EmbraceComponent = () => {
    return (
        <div  className='flex w-[60%] my-4 mx-auto'>
            <EmLeftSide></EmLeftSide>
            <EmRightSide></EmRightSide>
        </div>
    );
};

export default EmbraceComponent;