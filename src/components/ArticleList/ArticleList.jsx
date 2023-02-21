import React from 'react';
import {Card, Segment} from 'semantic-ui-react';

import NYTArticle from '../NYTArticle/NYTArticle';
import GuardianArticle from '../GuardianArticle/GuardianArticle';

export default function ArticleList({nytArticles, bookmarks, removeBookmark, bookmarkStatus, addBookmark, bookmarkExists, getBookmarks, guardianArticles}){
    return (
        <Card.Group itemsPerRow={3} stackable>
            {nytArticles.map((article) => {
                return (
                    <NYTArticle
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
            {guardianArticles.map((article) => {
                return (
                    <GuardianArticle 
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

            })}
        </Card.Group>
    )
}