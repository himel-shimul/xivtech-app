import React from 'react';
import AiComponent from '../AiRpa/AiComponent';
import DigitalComponents from '../digCom/DigitalComponents';
import InnovatComponent from '../InnovateCom/InnovatComponent';
import EmbraceComponent from '../EmbraceCom/EmbraceComponent';

const Home = () => {
    return (
        <div className=''>
            <AiComponent></AiComponent>
            <DigitalComponents></DigitalComponents>
            <InnovatComponent></InnovatComponent>
            <EmbraceComponent></EmbraceComponent>
        </div>
    );
};

export default Home;