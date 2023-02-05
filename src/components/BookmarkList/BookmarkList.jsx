import React from 'react';
import {Segment, Card} from 'semantic-ui-react';

import Bookmarks from '../Bookmarks/Bookmarks';

export default function BookmarkList({bookmarks, getBookmarks, removeBookmark}){
    console.log(bookmarks)
    return (
        <Card.Group itemsPerRow={3} stackable>
            {bookmarks.map((bookmark) => {
                return(
                    <Bookmarks 
                               bookmarks={bookmark} 
                               getBookmarks={getBookmarks} 
                               removeBookmark={removeBookmark}
                               key={bookmark._id}
                    
                    />
                )
            })}
        </Card.Group>
        
    )
}