import React, {useState, useEffect} from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import BookmarkList from '../../components/BookmarkList/BookmarkList';
import {Grid} from 'semantic-ui-react';

export default function BookmarkPage({loggedUser, handleLogout, bookmarks, getBookmarks, removeBookmark}){
    useEffect(() => {
        getBookmarks();
    }, [])

    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <Grid textAlign='center'>
                <Grid.Column style={{maxWidth: 900}}>
                    <h1>My Bookmarks</h1>
                    <BookmarkList 
                        bookmarks={bookmarks} 
                        getBookmarks={getBookmarks} 
                        removeBookmark={removeBookmark} />
                </Grid.Column>
            </Grid>
            
        </>
    )
}