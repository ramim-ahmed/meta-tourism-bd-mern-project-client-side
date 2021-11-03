import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner/PageBanner';

const Contact = () => {
    return (
        <div>
            <PageBanner>
                <div>
                   <span><Link to='/home'>Home</Link> > <span className='text-blue-700'>Contact</span></span>
               </div>
            </PageBanner>
        </div>
    );
};

export default Contact;