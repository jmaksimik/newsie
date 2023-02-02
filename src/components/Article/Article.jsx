import React from 'react';
import {Card, Image} from 'semantic-ui-react';

export default function Article({article}){
    return (
        <Card key={article._id} raised>
            <Image 
                src={`http://www.nytimes.com/${article.multimedia[1].url}`} 
                size='large'
            />
            <a href={article.web_url}>
                <Card.Header>
                    {article.snippet}
                </Card.Header>
             </a> 
            <Card.Content textAlign={'right'}>
                {article.pub_date}
            </Card.Content>
            <Card.Content textAlign={'left'}>
                {article.lead_paragraph}
            </Card.Content>
        </Card>
    )
}