import React from 'react';
import {Card, Segment} from 'semantic-ui-react';

import Article from '../Article/Article';

export default function ArticleList({nytArticles, bookmarkStatus, addBookmark}){
    return (
        <Card.Group itemsPerRow={3} stackable>
            {nytArticles.map((article) => {
                return (
                    <Article
                        article={article}
                        key={article._id}
                        bookmark={bookmarkStatus}
                        addBookmark={addBookmark}
                    />
                )
            }
            )}
        </Card.Group>
    )
}