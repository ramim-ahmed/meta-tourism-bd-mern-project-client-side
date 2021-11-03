import React from 'react';

const Testimonial = ({data}) => {
    const {name, img, feed_back, type} = data;
    return (
        <div className='flex flex-col items-center'>
            <div>
                <img className=' rounded-full' src={img} alt="" />
            </div>
            <div className='text-center mt-5'>
                <h1 className="text-3xl font-bold">{name}</h1>
                <h5 className="text-2xl text-gray-400">{type}</h5>
                <p className="text-lg">{feed_back}</p>
            </div>
        </div>
    );
};

export default Testimonial;