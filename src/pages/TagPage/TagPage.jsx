import React from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function TagPage({loggedUser, handleLogout, liftApiKeywords}) {
    const {tagName} = useParams();

    useEffect(() => {
        liftApiKeywords(tagName);
    }, [])
    
    return (
        <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        <h1>Tag Detail Page</h1>
        </>
    )
}