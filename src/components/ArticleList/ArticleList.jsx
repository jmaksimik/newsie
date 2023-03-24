import React from 'react';
import {Card, Segment} from 'semantic-ui-react';

import NYTArticle from '../NYTArticle/NYTArticle';

export default function ArticleList({nytArticles, bookmarks, removeBookmark, addBookmark, getBookmarks, guardianArticles, joinedArticles}){
    return (
        <Card.Group itemsPerRow={3} stackable>
            {joinedArticles?.map((article) => {
                return (
                    <NYTArticle
                        article={article}
                        key={article._id}
                        addBookmark={addBookmark}
                        bookmarks={bookmarks}
                        getBookmarks={getBookmarks}
                        removeBookmark={removeBookmark}
                    />
                )
            }
            )}
            {/* {guardianArticles.map((article) => {
                return (
                    <GuardianArticle 
                        article={article}
                        key={article._id}
                        addBookmark={addBookmark}
                        bookmarks={bookmarks}
                        getBookmarks={getBookmarks}
                        removeBookmark={removeBookmark}
                    />
                )

            })} */}
        </Card.Group>
    )
}