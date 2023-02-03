import React from 'react'; 
import {Card} from 'semantic-ui-react';

import Tag from '../Tag/Tag';


export default function TagList({tags, deleteTag}) {
    return (
        <Card.Group itemsPerRow={3} stackable>
            {tags.map((tag) => {
                return (
                    <Tag
                        tag = {tag}
                        key={tag._id}
                        deleteTag={deleteTag}

                    />
                )
            })}
        </Card.Group>
    )
}