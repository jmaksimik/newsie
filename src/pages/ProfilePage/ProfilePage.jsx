import React, {useState, useEffect} from 'react';


import PageHeader from '../../components/PageHeader/PageHeader';

export default function ProfilePage({loggedUser, handleLogout}){
    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <h1>Profile Page</h1>
        </>
    );
}

