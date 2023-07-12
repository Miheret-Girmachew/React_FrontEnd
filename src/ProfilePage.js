import React from 'react';

const ProfilePage = ({ user }) => {
    return (
        <div>
            <h1>Profile</h1>
            <p>Full Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Sex: {user.sex}</p>
            <p>Age: {user.age}</p>
            <p>Country: {user.country}</p>
        </div>
    );
};

export default ProfilePage;
