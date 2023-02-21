import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import PageHeader from '../../components/PageHeader/PageHeader';
import ArticleList from '../../components/ArticleList/ArticleList';



export default function TagPage({ loggedUser, handleLogout, removeBookmark, liftApiKeywords, bookmarkStatus, addBookmark, bookmarkExists, bookmarks, getBookmarks }) {
    const [nytArticles, setNytArticles] = useState([])
    const [guardianArticles, setGuardianArticles] = useState([]);
    const { tagName } = useParams();
    const pageTitle = tagName.replace('-', ' ').toUpperCase();
    const guardianKeyWords = tagName.replace('-', '%20AND%20')
    

    useEffect(() => {
        liftApiKeywords(tagName);
        let nytURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${tagName}&sort=newest&api-key=RPBVKJx9BvLEOAcgjyFJYW3axTX2Ox1A`
        let guardianURL = `https://content.guardianapis.com/search?q=${guardianKeyWords}&api-key=d12eebf2-426a-4265-b2f9-42fb638338ad&show-fields=all&type=article`

        async function makeApiCall() {
            try {
                const nytResponseJSON = await fetch(nytURL);
                const guardianResponseJSON = await fetch(guardianURL);
                const nytData = await nytResponseJSON.json();
                const guardianData = await guardianResponseJSON.json();
                setNytArticles(nytData.response.docs);
                setGuardianArticles(guardianData.response.results);
            } catch (err) {
                console.log(err)
            }
        }
        makeApiCall();
        getBookmarks();
    }, [])

    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <Grid textAlign='center'>
                <Grid.Column style={{ maxWidth: 900 }}>
                    <h1>{pageTitle} LATEST NEWS</h1>
                    <ArticleList
                        nytArticles={nytArticles}
                        guardianArticles={guardianArticles}
                        removeBookmark={removeBookmark}
                        bookmarkStatus={bookmarkStatus}
                        addBookmark={addBookmark}
                        bookmarkExists={bookmarkExists}
                        bookmarks={bookmarks}
                        getBookmarks={getBookmarks}
                    />
                </Grid.Column>
            </Grid>

        </>
    )
}