import React, {useState, useEffect} from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import BookmarkList from '../../components/BookmarkList/BookmarkList';

export default function BookmarkPage({loggedUser, addBookmark, handleLogout, bookmarks, getBookmarks, removeBookmark}){
    useEffect(() => {
        getBookmarks();
    }, [])

    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <BookmarkList bookmarks={bookmarks} getBookmarks={getBookmarks} removeBookmark={removeBookmark} />
        </>
    )
}