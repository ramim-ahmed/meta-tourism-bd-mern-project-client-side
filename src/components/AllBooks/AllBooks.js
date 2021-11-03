import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
const AllBooks = ({data}) => {
    
    const {_id, name, email, title, date, status} = data;

    const handleUpdateStatus = (id) => {
        fetch(`https://ghastly-broomstick-24724.herokuapp.com/updateStatus/${id}`, {
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Status Aproved Successfully Updated.')
            }
        })
    }

    const handleBookingDelete = id => {
        const proceed = window.confirm('Are Your Sure Want to Delete ??');
        if(proceed) {
            fetch(`https://ghastly-broomstick-24724.herokuapp.com/bookDelete/${id}`, {
                method:'DELETE',
            })
            .then( res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Your Package Successfully Deleted');
                }
            })
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>{status}</td>
            <td>
                <button onClick={ () =>handleUpdateStatus(_id)} type='button' className='bg-green-500 text-white px-4 py-1 hover:bg-green-700 transition'>Update</button>
            </td>
            <td>
            <button onClick={() => handleBookingDelete(_id)} className='px-3 py-2 hover:bg-red-600 transition hover:text-white '>
            <FaTrashAlt className='text-2xl text-red-600 hover:text-white transition' />
            </button>
            </td>
        </tr>
    );
};

export default AllBooks;