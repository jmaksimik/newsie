import {React, useState, useEffect} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';


export default function NYTArticle({article, removeBookmark, bookmarks, addBookmark}){
 

    // const formattedDate = format(new Date(article.pub_date), 'MM/dd/yyyy ')
    // const bookmarkIndex = bookmarks?.findIndex(bookmark => bookmark.title === article.headline.main)
    // const bookmarkColor = bookmarkIndex > -1 ? 'yellow' : 'black';



    async function handleAddBookmark() {
        const bookmark = {
            title: article.headline.main,
            url: article.web_url,
            description: article.lead_paragraph,
            image: `http://www.nytimes.com/${article.multimedia[3]?.url}`,
        }
        addBookmark(bookmark)
    }

    // const clickHandler = bookmarkIndex > -1 ? 
    //     () => removeBookmark(bookmarks[bookmarkIndex]._id) : () => handleAddBookmark(article._id)


    
    if (article.publisher == 'nyt'){
        return (
            <Card key={article._id} raised>
                <Image 
                    src={`http://www.nytimes.com/${article.multimedia[1]?.url}`} 
                    size='large'
                />
                <a href={article.web_url}>
                    <Card.Header as='h2'>
                        {article.headline.main}
                    </Card.Header>
                 </a> 
                <Card.Content textAlign={'left'}>
                    {/* {formattedDate} - {article.lead_paragraph} */}
                    <br></br>
                    <Icon name={'bookmark'} 
                          size='large' 
                        //   color={bookmarkColor} 
                        //   onClick={clickHandler} 
                    />
                </Card.Content>
            </Card>
        )
    }
    if (article.publisher == 'guardian'){
        return(
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
                {/* {formattedDate} - {article.fields.trailText} */}
                <br></br>
                <Icon name={'bookmark'} 
                      size='large' 
                    //   color={bookmarkColor} 
                    //   onClick={clickHandler} 
                      />
            </Card.Content>
        </Card>
        )
    }

}