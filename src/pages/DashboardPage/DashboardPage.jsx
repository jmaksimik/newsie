import React, {useState, useEffect} from 'react';

import {Grid, Icon, Input} from 'semantic-ui-react';

import PageHeader from '../../components/PageHeader/PageHeader';
import AddTagForm from '../../components/AddTagForm/AddTagForm';
import TagList from '../../components/TagList/TagList';

import * as tagAPI from '../../utils/tagApi';

export default function DashboardPage({handleLogout, loggedUser, getBookmarks}){
    const [tags, setTags] = useState([]);
    const [error, setError] = useState('');


    async function handleAddTag(tag) {
        try {
            const response = await tagAPI.create(tag);
            setTags([...tags, response.tag])

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

    async function deleteTag(tagId) {
        try {
            const response = await tagAPI.deleteTag(tagId);
            getTags();

        } catch(err){
            console.log(err.message, 'error in deleting tag')
            setError('error deleting tag, please try again')
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
            deleteTag={deleteTag}
        />
        </>
    )
}