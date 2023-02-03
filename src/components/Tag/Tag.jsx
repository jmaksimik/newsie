import React from 'react';

import {Card, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Tags({tag, deleteTag}){
    const clickHandler = () => deleteTag(tag._id)
    let title = tag.title; 
    
    let urlTitle = title.replaceAll(' ', '-').toLowerCase();

    return (
        <Card key={tag._id} raised>
            <Card.Content>
                <Link to={`/tag/${urlTitle}`}>
                    <Card.Description as='h3' >{tag.title}</Card.Description>
                </Link>
                <Button className='btn' onClick={clickHandler}>Delete</Button>
            </Card.Content>
        </Card>
    )
}