import {React, useState, useEffect} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';


export default function DashboardArticle({article, removeBookmark, bookmarks, addBookmark, getBookmarks}){
 

    const formattedDate = format(new Date(article.published_date), 'MM/dd/yyyy ')
    console.log(bookmarks, '<- bookmarks ')
    const bookmarkIndex = bookmarks?.findIndex(bookmark => bookmark.title === article.title)
    const bookmarkColor = bookmarkIndex > -1 ? 'yellow' : 'black';
    console.log(bookmarkIndex);



    async function handleAddBookmark() {
        const bookmark = {
            title: article.title,
            url: article.url,
            description: article.abstract,
            image: `${article.multimedia[0]?.url}`,
        }
        addBookmark(bookmark)
    }

    const clickHandler = bookmarkIndex > -1 ? 
        () => removeBookmark(bookmarks[bookmarkIndex]._id) : () => handleAddBookmark(article._id)


    

    return (
        
        <Card key={article._id} raised>
            <Image 
                src={`${article.multimedia[1]?.url}`} 
                size='large'
            />
            <a href={article.url}>
                <Card.Header as='h2'>
                    {article.title}
                </Card.Header>
             </a> 
            <Card.Content textAlign={'left'}>
                {formattedDate} - {article.abstract}
                <br></br>
                <Icon name={'bookmark'} 
                      size='large' 
                      color={bookmarkColor} 
                      onClick={clickHandler} />
            </Card.Content>
        </Card>
    )
}