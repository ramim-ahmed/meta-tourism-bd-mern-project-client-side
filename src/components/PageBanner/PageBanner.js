import React from 'react';
import Banner from '../../assets/breadcrumb-bg.9cc4efda.png';
const PageBanner = ({children}) => {
    return (
        <div className='mb-20' style={{backgroundImage:`url(${Banner})`, height:'200px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover' }} >
           <div style={{height:'200px'}} className='flex justify-center items-center text-white'>
                <div>
                    <h2 className="text-2xl font-bold">{children}</h2>
                </div>
           </div>
        </div>
    );
};

export default PageBanner;