import {React, useState, useEffect} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';


export default function GuardianArticle({article, removeBookmark, bookmarks, addBookmark, getBookmarks}){
 

    const formattedDate = format(new Date(article.webPublicationDate), 'MM/dd/yyyy ')
    const bookmarkIndex = bookmarks?.findIndex(bookmark => bookmark.title === article.webTitle)
    const bookmarkColor = bookmarkIndex > -1 ? 'yellow' : 'black';



    async function handleAddBookmark() {
        const bookmark = {
            title: article.webTitle,
            url: article.webUrl,
            description: article.fields.trailText,
            image: article.fields.thumbnail,
        }
        addBookmark(bookmark)
    }

    const clickHandler = bookmarkIndex > -1 ? 
        () => removeBookmark(bookmarks[bookmarkIndex]._id) : () => handleAddBookmark(article._id)


    

    return (
        
        <Card key={article._id} raised>
            <Image 
                src={article.fields.thumbnail} 
                size='large'
            />
            <a href={article.webUrl}>
                <Card.Header as='h2'>
                    {article.webTitle}
                </Card.Header>
             </a> 
            <Card.Content textAlign={'left'}>
                {formattedDate} - {article.fields.trailText}
                <br></br>
                <Icon name={'bookmark'} 
                      size='large' 
                      color={bookmarkColor} 
                      onClick={clickHandler} />
            </Card.Content>
        </Card>
    )
}