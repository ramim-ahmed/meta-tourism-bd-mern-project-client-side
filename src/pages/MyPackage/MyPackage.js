import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import PageBanner from '../../components/PageBanner/PageBanner';
import UserPackage from '../../components/UserPackage/UserPackage';
import useAuth from '../../hooks/useAuth';

const MyPackage = () => {

    const [myPackage, setMyPackage] = useState([]);
    const {user} = useAuth();

    useEffect( () => {
        const url = `https://ghastly-broomstick-24724.herokuapp.com/books/?email=${user.email}`
        fetch(url)
        .then( res => res.json())
        .then( data => {
           setMyPackage(data)
        })
      }, [user])

    return (
        <div>
           <PageBanner>
                <div>
                   <span><Link to='/home'>Home</Link> > <span className='text-blue-700'>My Package</span></span>
                </div>
           </PageBanner>
           <Container>
               <div className="md:mx-7 mx-0 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
                  {
                      myPackage.map( data => <UserPackage key={data._id} data={data} />)
                  }
               </div>
           </Container>
        </div>
    );
};

export default MyPackage;