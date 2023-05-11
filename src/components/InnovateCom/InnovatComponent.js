import React from 'react';
import InnLeftSide from './InnLeftSide';
import InRightSide from './InRightSide';

const InnovatComponent = () => {
    return (
        <div  className='flex w-[60%] my-4 mx-auto'>
            <InnLeftSide></InnLeftSide>
            <InRightSide></InRightSide>
        </div>
    );
};

export default InnovatComponent;