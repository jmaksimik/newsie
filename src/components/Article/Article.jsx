import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import format from 'date-fns/format';

export default function Article({article}){
    const formattedDate = format(new Date(article.pub_date), 'MM/dd/yyyy ')

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
            </Card.Content>
        </Card>
    )
}