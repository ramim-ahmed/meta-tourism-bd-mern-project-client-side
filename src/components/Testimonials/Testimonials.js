import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect( () => {
        fetch('./client_say.json')
        .then( res => res.json())
        .then( data => {
            setTestimonials(data);
        })
    }, []);

    return (
        <div className='my-28'>
           <Container>

                <div className='text-center space-y-3'>
                    <p className="text-2xl text-yellow-500">Our Traveller Say</p>
                    <h1 className="text-5xl font-bold">What Oue Traveller Say About Us</h1>
                </div>
                 <div className='my-20 mx-7 md:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                     {
                         testimonials.map( data => <Testimonial key={data.id} data ={data} />)
                     }
                 </div>
           </Container>
        </div>
    );
};

export default Testimonials;