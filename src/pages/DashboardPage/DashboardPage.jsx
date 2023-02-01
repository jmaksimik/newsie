import React, {useState, useEffect} from 'react';

import {Grid, Icon, Input} from 'semantic-ui-react';

import PageHeader from '../../components/PageHeader/PageHeader';
import AddTagForm from '../../components/AddTagForm/AddTagForm';
import TagList from '../../components/TagList/TagList';

import * as tagAPI from '../../utils/tagApi';

export default function DashboardPage({handleLogout, loggedUser}){
    const [tags, setTags] = useState([]);
    const [error, setError] = useState('');


    async function handleAddTag(tag) {
        try {
            const response = await tagAPI.create(tag);
            console.log(tag, '<- tag data passed from form component to dashboard')
            console.log(response, '<- response.tag after the tagAPI.create function is run')
            setTags([...tags, response.tag])
            console.log(tags, '<- tag state after setTags is run')

        } catch(err) {
            console.log(err.message);
            setError('Error creating post, please try again')
        }
    }

    async function getTags() {
        try {
            const response = await tagAPI.getAll();
            setTags(response.data);

        } catch(err) {
            console.log(err.message, 'error in fetching tags');
        }
    }

    useEffect(() => {
        getTags();
    }, [])
    
    return (
        <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        <h1>Dashboard Page</h1>
        <AddTagForm handleAddTag={handleAddTag} />
        <TagList
            tags={tags}
        />
        </>
    )
}