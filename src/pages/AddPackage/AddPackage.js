import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Container from '../../components/Container/Container';

const AddPackage = () => {
     const { reset, register, handleSubmit, formState: { errors } } = useForm();
     const [photo, setPhoto] = useState('');

     const handleImageUpload = event => {

        const imageData = new FormData();

        imageData.set('key', '3e6fac7ec3639b70e8109cbdce0ca3ad');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)

        .then(function (response) {
            setPhoto(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
      }


     const onSubmit = data => {
         
        const packageData = {...data, photo:photo};

        fetch('https://ghastly-broomstick-24724.herokuapp.com/packages', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(packageData)
        })
        .then(res => res.json())
        .then( data => {
           if(data.insertedId){
             alert('Packages Succesfully Added');
             reset();
             setPhoto('')
           }
        })
        
     };
     
    return (
        <>
            <Container>
                 <div className='flex justify-center items-center bg-gray-200 py-12'>
                      <div className='w-2/5'>
                        <h1 className="text-4xl border-b-2 border-blue-700 text-center">Add Tour Packages</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="title">Title</label>
                                <br />
                                <input className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='title' {...register("title", { required: true })} />
                                {errors.title && <span className='text-red-700'>This field is required</span>}
                            </div>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="description">Description</label>
                                <br />
                                <textarea className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='description' {...register("description", { required: true })} />
                                {errors.description && <span className='text-red-700'>This field is required</span>}
                            </div>

                            <div className='space-y-2 mt-3'>
                                <label htmlFor="location">Location</label>
                                <br />
                                <input className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='location' {...register("location", { required: true })} />
                                {errors.location && <span className='text-red-700'>This field is required</span>}
                            </div>
                            <div className='space-y-2 mt-3'>
                                <label htmlFor="price">Price</label>
                                <br />
                                <input type='number' className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='price' {...register("price", { required: true })} />
                                {errors.price && <span className='text-red-700'>This field is required</span>}
                            </div>
                            <div className='space-y-2 mt-3'>
                                <label htmlFor="rating">Rating</label>
                                <br />
                                <input type='number' className='w-full outline-none py-2 px-2 text-xl border-2 focus:border-blue-800' id='rating' {...register("rating", { required: true })} />
                                {errors.rating && <span className='text-red-700'>This field is required</span>}
                            </div>
                            <div className='space-y-2 mt-3'>
                                <label htmlFor="image">Upload Image</label>
                                <br />
                                <input onChange={handleImageUpload} type='file' id='image' required/>
                            </div>
                             <br />
                            <input type="submit" value='Submit' className='w-full bg-blue-600 text-white text-2xl py-2 cursor-pointer' />
                        </form>
                      </div>
                 </div>
            </Container>
        </>
    );
};

export default AddPackage;