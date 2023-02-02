import React from 'react';
import {Card, Segment} from 'semantic-ui-react';

import Article from '../Article/Article';

export default function ArticleList({nytArticles}){
    return (
        <Card.Group itemsPerRow={1} stackable>
            {nytArticles.map((article) => {
                return (
                    <Article
                        article={article}
                        key={article._id}
                    />
                )
            }
            )}
        </Card.Group>
    )
}