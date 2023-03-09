import React from 'react';
import Listings from '../../listings/Listings'
import Contact from '../../contact/Contact'
import IndividualIntervalsExample from '../../carousel/Carousel'

const Home = () => {


    return (
        <>
            <IndividualIntervalsExample />
            <Listings />
            <Contact />   
        </>
    );
};

export default Home;