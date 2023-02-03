import {React, useState, useEffect} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';


export default function Article({article, removeBookmark, bookmarks, addBookmark, getBookmarks}){
 

    const formattedDate = format(new Date(article.pub_date), 'MM/dd/yyyy ')
    console.log(bookmarks, '<- bookmarks ')
    const bookmarkIndex = bookmarks?.findIndex(bookmark => bookmark.title === article.headline.main)
    const bookmarkColor = bookmarkIndex > -1 ? 'yellow' : 'black';
    console.log(bookmarkIndex);



    async function handleAddBookmark() {
        const bookmark = {
            title: article.headline.main,
            url: article.web_url,
            description: article.lead_paragraph,
            image: `http://www.nytimes.com/${article.multimedia[3]?.url}`,
        }
        addBookmark(bookmark)
    }

    const clickHandler = bookmarkIndex > -1 ? 
        () => removeBookmark(bookmarks[bookmarkIndex]._id) : () => handleAddBookmark(article._id)


    

    return (
        
        <Card key={article._id} raised>
            <Image 
                src={`http://www.nytimes.com/${article.multimedia[3]?.url}`} 
                size='large'
            />
            <a href={article.web_url}>
                <Card.Header as='h2'>
                    {article.headline.main}
                </Card.Header>
             </a> 
            <Card.Content textAlign={'left'}>
                {formattedDate} - {article.lead_paragraph}
                <br></br>
                <Icon name={'bookmark'} 
                      size='large' 
                      color={bookmarkColor} 
                      onClick={clickHandler} />
            </Card.Content>
        </Card>
    )
}