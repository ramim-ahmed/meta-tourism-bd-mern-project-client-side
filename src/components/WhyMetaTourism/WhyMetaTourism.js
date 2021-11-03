import React from 'react';
import { FaCheck, FaHandshake, FaHeart, FaUsers } from "react-icons/fa";
import Container from '../Container/Container';
import WhyMeta from '../WhyMeta/WhyMeta';
// import WhyMeta from '../WhyMeta/WhyMeta';
const whyMetaToursimData = [
    {
        id:1,
        icons: <FaUsers />,
        title: '1000+ Our worldwide guide'
    },
    {
        id:2,
        icons: <FaHandshake />,
        title: '100% trusted travel agency'
    },
    {
        id:3,
        icons: <FaCheck />,
        title: '10+ year of travel experience'
    },
    {
        id:4,
        icons: <FaHeart />,
        title: '90% of our traveller happy'
    }

]
const WhyMetaTourism = () => {
    return (
        <div className='my-28'>
          <Container>
                <div className='text-center space-y-3'>
                    <p className="text-2xl text-yellow-500">Why Connect With Us.</p>
                    <h1 className="text-5xl font-bold w-3/5 mx-auto">Why You Are Travel With Meta Tourism Bangladesh</h1>
                </div>
                <div className='mx-7 md:mx-0 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-20'>
                    {
                        whyMetaToursimData.map( data => <WhyMeta key={data.id} data={data} />)
                    }
                </div>
          </Container>
        </div>
    );
};

export default WhyMetaTourism;