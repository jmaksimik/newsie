import React from 'react';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


import PageHeader from '../../components/PageHeader/PageHeader';
import ArticleList from '../../components/ArticleList/ArticleList';


export default function TagPage({loggedUser, handleLogout, liftApiKeywords}) {
    const [nytArticles, setNytArticles] = useState([])
    const {tagName} = useParams();
    const pageTitle = tagName.replace('-', ' ').toUpperCase();

    useEffect(() => {
        liftApiKeywords(tagName);
        let nytURL= `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${tagName}&sort=newest&api-key=RPBVKJx9BvLEOAcgjyFJYW3axTX2Ox1A`

        async function makeApiCall() {
            try{
                const responseJSON= await fetch(nytURL);
                const data = await responseJSON.json();
                setNytArticles(data.response.docs)
            } catch(err) {
                console.log(err)
            }
        }
        makeApiCall();
    }, [])
    
    return (
        <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        <h1>{pageTitle} LATEST NEWS</h1>
        <ArticleList nytArticles={nytArticles} />
        </>
    )
}