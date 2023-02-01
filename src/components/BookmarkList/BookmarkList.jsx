import React from 'react';
import {Segment} from 'semantic-ui-react';

import Bookmarks from '../Bookmarks/Bookmarks';

export default function BookmarkList(){
    return (
        <Segment>
            <h1>Bookmark List</h1>
            <Bookmarks />
        </Segment>
        
    )
}