import React, {useState, useEffect} from 'react';

import {Grid, Icon, Input} from 'semantic-ui-react';

import PageHeader from '../../components/PageHeader/PageHeader';
import AddTagForm from '../../components/AddTagForm/AddTagForm';

import * as tagAPI from '../../utils/tagApi';

export default function DashboardPage({handleLogout, loggedUser}){
    const [tags, setTags] = useState([]);
    const [error, setError] = useState('');


    async function handleAddTag(tag) {
        try {
            const response = await tagAPI.create(tag);
            setTags([response.tag, ...tags])
            console.log(tags)

        } catch(err) {
            console.log(err.message, 'error in adding tag');
            setError('Error creating post, please try again')
        }
    }

    async function getTags() {
        try {
            const response = await tagAPI.getAll();
            setTags(response.data);
            console.log(tags)

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
        </>
    )
}