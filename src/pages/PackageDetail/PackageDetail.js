import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import PageBanner from '../../components/PageBanner/PageBanner';
import useAuth from '../../hooks/useAuth';

const PackageDetail = () => {
    const {user} = useAuth();
    const {reset, register, handleSubmit, formState: { errors } } = useForm();
    const {id} = useParams();
    const [packageDetail, setPackageDetail] = useState({});
    useEffect( () => {
        const url = `https://ghastly-broomstick-24724.herokuapp.com/package/${id}`
        fetch(url)
        .then( res => res.json())
        .then( data => {
            setPackageDetail(data)
        })
    }, [id]);

    const {title, photo, location, price, description, rating} = packageDetail;

    const onSubmit = data => {
        const books = {
            ...data,
            email:user.email,
            title: title,
            location: location,
            status:'Pending'
        }
        
        fetch('https://ghastly-broomstick-24724.herokuapp.com/books', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(books)
        })
        .then(res => res.json())
        .then( data => {
            if(data.insertedId){
                alert('Your Package Successfully Done.');
                reset();
            }
        })
    }

    return (
        <div>
           <PageBanner>
               <div>
                   <span><Link to='/home'>Home</Link> > <span className='text-blue-700'>Package Details</span></span>
               </div>
           </PageBanner>
            <Container>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {/* tour package deetails */}
                  <div>
                      <div>
                          <img className='w-full' src={photo} alt="" />
                      </div>
                      <div className='my-6 space-y-2 px-2'>
                            <div className='flex justify-between'>
                                <p className="text-lg"><span className='text-2xl font-bold'>${price}</span>/Per Person</p>
                                <p className="text-lg font-bold">5 Days/6 night</p>
                            </div>
                            <h1 className="text-4xl font-bold">{title}</h1>
                            <h1 className="text-2xl text-gray-500">{location}</h1>
                            <p className=" text-lg">{description}</p>
                            <p className="text-lg font-semibold">{rating}k+Rating</p>
                    </div>
                  </div>

                  {/* purchase information collection form */}
                  <div>
                  <div className='flex justify-center items-center bg-gray-200 py-12'>
                      <div>
                        <h1 className="text-4xl border-b-2 border-blue-700 text-center">Book This Package</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="name">Name</label>
                                <br />
                                <input defaultValue={user.displayName} className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='name' {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-700'>This field is required</span>}
                            </div>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="alt_email">Email</label>
                                <br />
                                <input defaultValue={user.email} className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='alt_email' {...register("alt_email", { required: true })} />
                                {errors.alt_email && <span className='text-red-700'>This field is required</span>}
                            </div>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="phone">Phone Number</label>
                                <br />
                                <input className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='phone' {...register("phone", { required: true })} />
                                {errors.phone && <span className='text-red-700'>This field is required</span>}
                            </div>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="date">Date</label>
                                <br />
                                <input type='date' className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='date' {...register("date", { required: true })} />
                                {errors.date && <span className='text-red-700'>This field is required</span>}
                            </div>
                            <div className='space-y-2 mt-3'>
                                <label htmlFor="address">Adddress</label>
                                <br />
                                <textarea type='text' className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='address' {...register("address", { required: true })} />
                                {errors.address && <span className='text-red-700'>This field is required</span>}
                            </div>

                            <div className='space-y-2 mt-3'>
                                <select className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' {...register("ticket_type")}>
                                    <option value="">Ticket Type</option>
                                    <option value="Fly">Travel With Fly</option>
                                    <option value="train">Travel with Train</option>
                                    <option value="Bus">Travel with Bus</option>
                                </select>
                                {errors.ticket_type && <span className='text-red-700'>This field is required</span>}
                            </div>
                             <br />
                            <input type="submit" value='Submit' className='w-full bg-blue-600 text-white text-2xl py-2 cursor-pointer' />
                        </form>
                      </div>
                 </div>
                  </div>
              </div>
            </Container>
        </div>
    );
};

export default PackageDetail;