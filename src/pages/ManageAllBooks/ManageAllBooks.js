import React, { useEffect, useState } from 'react';
import AllBooks from '../../components/AllBooks/AllBooks';
import Container from '../../components/Container/Container';

const ManageAllBooks = () => {

    const [allbooks, setAllBooks] = useState([]);

    useEffect( () => {
        fetch('https://ghastly-broomstick-24724.herokuapp.com/allbooks')
        .then( res => res.json())
        .then( data => {
            setAllBooks(data)
        })
    }, []);

    return (
        <div>
           <Container>
              <div className='my-12 text-center'>
                  <h1 className="text-4xl font-bold">All Books List</h1>
              </div>
              <div>
              <table className="w-full text-center">
                    <thead className=' border-b border-gray-500'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tour Package</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Update Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbooks.map( data => <AllBooks key={data._id} data={data} />)
                        }
                    </tbody>
            </table>
              </div>
           </Container>
        </div>
    );
};

export default ManageAllBooks;