import React, {useState, useEffect} from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import BookmarkList from '../../components/BookmarkList/BookmarkList';

export default function BookmarkPage({loggedUser, handleLogout}){
    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <BookmarkList />
        </>
    )
}