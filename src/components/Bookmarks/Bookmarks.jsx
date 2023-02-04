import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';


export default function Bookmarks({bookmarks, removeBookmark}) {
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
            {bookmarks.date_published} - {bookmarks.description}
            <br></br>
            <Icon name={'bookmark'}
                  size='large'/>
        </Card.Content>
        </Card>
    )
}