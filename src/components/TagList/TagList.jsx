import React from 'react'; 
import {Card} from 'semantic-ui-react';

import Tags from '../Tags/Tags';

export default function TagList({tags, deleteTag}) {
    return (
        <Card.Group itemsPerRow={3} stackable>
            {tags.map((tag) => {
                return (
                    <Tags
                        tag = {tag}
                        key={tag._id}
                        deleteTag={deleteTag}

                    />
                )
            })}
        </Card.Group>
    )
}