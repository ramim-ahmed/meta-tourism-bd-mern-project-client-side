import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner/PageBanner';
import TourPackages from '../../components/TourPackages/TourPackages';

const OurPackages = () => {
    return (
        <div>
           <PageBanner>
                <div>
                   <span><Link to='/home'>Home</Link> > <span className='text-blue-700'>All Packages</span></span>
               </div>
           </PageBanner>
           <TourPackages />
        </div>
    );
};

export default OurPackages;