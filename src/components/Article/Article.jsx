import {React, useState} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';

export default function Article({article, bookmarkStatus}){
    const formattedDate = format(new Date(article.pub_date), 'MM/dd/yyyy ')
    const bookmarkColor = bookmarkStatus ? 'yellow' : 'black'

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
                <Icon name={'bookmark'} size='large' color={bookmarkColor}  />
            </Card.Content>
        </Card>
    )
}