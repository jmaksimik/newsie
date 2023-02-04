import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';


export default function Bookmarks({bookmarks, removeBookmark}) {
    const formattedDate = format(new Date(bookmarks.createdAt), 'MM/dd/yyy');
    console.log(bookmarks, '<- bookmarks in bookmarks.jsx');
    
    const clickHandler = () => removeBookmark(bookmarks._id);

    return (
        <Card key={bookmarks._id} raised>
            <Image
                src={bookmarks.image}
                size='large'
            />
        <a href={bookmarks.url}>
            <Card.Header as='h2'>
                {bookmarks.title}
            </Card.Header>
        </a>
        <Card.Content textAlign={'left'}>
            Added: {formattedDate}
            <br></br>
            {bookmarks.description}
            <br></br>
            <Icon name={'bookmark'}
                  size='large'
                  color='yellow'
                  onClick={clickHandler}
                  />
        </Card.Content>
        </Card>
    )
}