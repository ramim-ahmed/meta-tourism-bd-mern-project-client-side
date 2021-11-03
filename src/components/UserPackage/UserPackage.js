import React from 'react';
import OrderBooks from '../OrderBooks/OrderBooks';

const UserPackage = ({data}) => {
    const {_id, title, location, status, ticket_type, date, phone} = data;
    return (
        <div className='bg-gray-300 p-5'>
            <OrderBooks id={_id} title={title} location={location} status={status} date={date} phone={phone} ticket={ticket_type} />             
       </div>
    );
};

export default UserPackage;