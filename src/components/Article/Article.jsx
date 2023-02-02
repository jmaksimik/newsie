import {React, useState} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';

export default function Article({article, bookmarkStatus, addBookmark}){
    const [state, setState] = useState({
        title: '',
        url: '',
        description: '',
        image: '',
    })

    const formattedDate = format(new Date(article.pub_date), 'MM/dd/yyyy ')
    const bookmarkColor = bookmarkStatus ? 'yellow' : 'black';
    const clickHandler = () => addBookmark(state)

    async function handleAddBookmark() {
        setState({
            title: article.headline.main,
            url: article.web_url,
            description: article.lead_paragraph,
            image: `http://www.nytimes.com/${article.multimedia[3]?.url}`,
        })
        return state
    }



    


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
                <Icon name={'bookmark'} size='large' color={bookmarkColor} onClick={clickHandler} />
            </Card.Content>
        </Card>
    )
}