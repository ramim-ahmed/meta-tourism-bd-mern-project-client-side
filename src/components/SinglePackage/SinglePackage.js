import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({tour}) => {
    const {_id, title, photo, price, description, rating} = tour;

    return (
        <div className='hover:shadow-xl transition-all' style={{backgroundColor:'#E0E6EF'}}>
            <div>
                <img className='w-full' src={photo} alt="" />
            </div>
            <div className='my-6 space-y-2 px-2'>
              <div className='flex justify-between'>
              <p className="text-lg"><span className='text-2xl font-bold'>${price}</span>/Per Person</p>
              <p className="text-lg font-bold">5 Days/6 night</p>
              </div>
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className=" text-lg">{description}</p>
              <p className="text-lg font-semibold">{rating}k+Rating</p>
              <Link to={`/package/detail/${_id}`}>
                    <button className='w-full py-3 bg-blue-500 text-white text-lg font-semibold'>Book Package</button>
              </Link>
            </div>
        </div>
    );
};

export default SinglePackage;