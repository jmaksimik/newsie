import React, { useState, useEffect } from 'react';

import { Grid, Icon, Input } from 'semantic-ui-react';

import PageHeader from '../../components/PageHeader/PageHeader';
import AddTagForm from '../../components/AddTagForm/AddTagForm';
import TagList from '../../components/TagList/TagList';
import DashboardList from '../../components/DashboardList/DashboardList';

import * as tagAPI from '../../utils/tagApi';

export default function DashboardPage({ handleLogout, loggedUser, getBookmarks, removeBookmark, addBookmark, bookmarks }) {
    const [tags, setTags] = useState([]);
    const [error, setError] = useState('');
    const [frontPageArticles, setFrontPageArticles] = useState([]);


    async function handleAddTag(tag) {
        try {
            const response = await tagAPI.create(tag);
            setTags([...tags, response.tag])

        } catch (err) {
            console.log(err.message);
            setError('Error creating post, please try again')
        }
    }

    async function getTags() {
        try {
            const response = await tagAPI.getAll();
            setTags(response.data);

        } catch (err) {
            console.log(err.message, 'error in fetching tags');
        }
    }

    async function deleteTag(tagId) {
        try {
            const response = await tagAPI.deleteTag(tagId);
            getTags();

        } catch (err) {
            console.log(err.message, 'error in deleting tag')
            setError('error deleting tag, please try again')
        }
    }

    useEffect(() => {
        let frontPage = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=RPBVKJx9BvLEOAcgjyFJYW3axTX2Ox1A'

        async function makeApiCall() {
            try{
                const responseJSON = await fetch(frontPage);
                const data = await responseJSON.json();
                setFrontPageArticles(data.results)

            }catch(err) {
                console.log(err)
            }
        }
        getTags();
        makeApiCall();
        getBookmarks();
        
    }, [])

    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <Grid 
                textAlign='center'    
            >
                <Grid.Column style={{maxWidth: 900}}>
                    <h1> My Dashboard</h1>
                    <AddTagForm handleAddTag={handleAddTag} />
                    <TagList
                        tags={tags}
                        deleteTag={deleteTag}
                    />
                    <h1>Top Headlines</h1>
                    <DashboardList 
                        articles={frontPageArticles} 
                        removeBookmark={removeBookmark}
                        addBookmark={addBookmark}
                        bookmarks={bookmarks}
                        getBookmarks={getBookmarks}

                    
                    />
                </Grid.Column>
            </Grid>

        </>
    )
}