import React from 'react';
import Container from '../../components/Container/Container';

const NotFound = () => {
    return (
        <div className=' h-72'>
            <Container>
                  <div>
                  <h1 className="text-4xl text-center text-red-600">Not Found this Page</h1>
                  </div>
            </Container>
        </div>
    );
};

export default NotFound;