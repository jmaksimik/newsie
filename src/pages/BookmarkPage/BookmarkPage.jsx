import React, {useState, useEffect} from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function BookmarkPage({loggedUser, handleLogout}){
    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <h1>Bookmark Page</h1>
        </>
    )
}