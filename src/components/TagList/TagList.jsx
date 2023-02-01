import React from 'react'; 
import {Card} from 'semantic-ui-react';

import Tags from '../Tags/Tags';

export default function TagList({tags}) {
    return (
        <Card.Group itemsPerRow={1} stackable>
            {tags.map((tag) => {
                return (
                    <Tags
                        tag = {tag}
                        key={tag._id}
                    />
                )
            })}
        </Card.Group>
    )
}