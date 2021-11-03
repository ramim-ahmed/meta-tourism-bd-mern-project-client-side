import React, { useContext } from 'react';
import { TourContext } from '../../App';
import Container from '../Container/Container';
import SinglePackage from '../SinglePackage/SinglePackage';

const TourPackages = () => {
    const [tourPackages] = useContext(TourContext)
    return (
        <div className='my-32 mx-7'>
           <Container>
                <div className='text-center space-y-3'>
                    <p className="text-2xl text-yellow-500">Choose Your Package</p>
                    <h1 className="text-5xl font-bold">Select Your Best Package For Your Travel</h1>
                </div>
                <div className='my-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    {
                        tourPackages.map( tour => <SinglePackage key={tour._id} tour={tour} />)
                    }
                </div>
           </Container>
        </div>
    );
};

export default TourPackages;