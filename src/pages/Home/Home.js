import React from 'react';
import Hero from "./Hero/Hero";
import Accardeon from "./Accardeon/Accardeon";
import Follow from "./Follow/Follow";
import Staty from './Staty/Staty';

const Home = () => {
    return (
        <div>
           <Hero/>
            <Staty/>
            <Follow/>
            <Accardeon/>
        </div>
    );
};

export default Home;