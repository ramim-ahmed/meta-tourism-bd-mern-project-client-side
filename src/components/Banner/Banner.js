import React from 'react';
import banner from '../../assets/banner.png';
import Container from '../Container/Container';
const Banner = () => {
    return (
        <div className='bg-no-repeat bg-center'  style={{background:`url(${banner})`}}>
            <Container>
                <div style={{height:"650px"}} className='flex justify-center items-center'>
                    <div className='text-center space-y-4'>
                        <h1 className="text-6xl text-white font-bold">Amazing Tourism With</h1>
                        <h1 className="text-6xl text-white font-bold">Meta Tourism In Bangladesh</h1>
                        <h2 className="text-3xl text-yellow-400 font-bold">7 Days, 8 Night Tour.</h2>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;