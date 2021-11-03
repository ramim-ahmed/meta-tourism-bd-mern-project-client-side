import React from 'react';

const WhyMeta = ({data}) => {
    const {icons, title} = data
    return (
        <div className='bg-blue-500 text-white p-3'>
             <div className='flex flex-col items-center space-y-2 text-center'>
                 <h1 className="text-7xl">{icons}</h1>
                 <h1 className="text-3xl font-bold">{title}</h1>
             </div>
        </div>
    );
};

export default WhyMeta;