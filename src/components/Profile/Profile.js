import React from 'react';

const Profile = ({name, email}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <h5 className="text-xl font-bold">{email}</h5>
        </div>
    );
};

export default Profile;