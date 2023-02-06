import React from 'react';
import {Card, Segment} from 'semantic-ui-react';

import DashboardArticle from '../DashboardArticle/DashboardArticle';

export default function ArticleList({articles, bookmarks, removeBookmark, bookmarkStatus, addBookmark, bookmarkExists, getBookmarks}){
    return (
        <Card.Group itemsPerRow={3} stackable>
            {articles.map((article) => {
                return (
                    <DashboardArticle
                        article={article}
                        key={article._id}
                        bookmark={bookmarkStatus}
                        addBookmark={addBookmark}
                        bookmarkExists={bookmarkExists}
                        bookmarks={bookmarks}
                        getBookmarks={getBookmarks}
                        removeBookmark={removeBookmark}
                    />
                )
            }
            )}
        </Card.Group>
    )
}