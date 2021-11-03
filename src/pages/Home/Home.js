import React from 'react';
import Banner from '../../components/Banner/Banner';
import Testimonials from '../../components/Testimonials/Testimonials';
import TourPackages from '../../components/TourPackages/TourPackages';
import WhyMetaTourism from '../../components/WhyMetaTourism/WhyMetaTourism';

const Home = () => {
    return (
        <>
          <Banner />
          <TourPackages />
          <WhyMetaTourism />
          <Testimonials />
        </>
    );
};

export default Home;