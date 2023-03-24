import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import PageHeader from '../../components/PageHeader/PageHeader';
import ArticleList from '../../components/ArticleList/ArticleList';



export default function TagPage({ loggedUser, handleLogout, removeBookmark, addBookmark, bookmarks, getBookmarks }) {
    const [nytArticles, setNytArticles] = useState([])
    const [guardianArticles, setGuardianArticles] = useState([]);
    const [joinedArticles, setJoinedArticles] = useState();

    const { tagName } = useParams();

    const pageTitle = tagName.replace('-', ' ').toUpperCase();
    const guardianKeyWords = tagName.replace('-', '%20AND%20')


    useEffect(() => {
        let nytURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${tagName}&sort=newest&api-key=RPBVKJx9BvLEOAcgjyFJYW3axTX2Ox1A`
        let guardianURL = `https://content.guardianapis.com/search?q=${guardianKeyWords}&api-key=d12eebf2-426a-4265-b2f9-42fb638338ad&show-fields=all&type=article`

        async function makeApiCall() {
            try {
                    fetch(nytURL)
                    .then(res => {
                        const nytData = res.json();
                        return nytData  
                    })
                    .then(nytData => {
                        return setNytArticles(nytData.response.docs);
                    })

                     fetch(guardianURL)
                    .then(res => {
                        const guardianData = res.json();
                        return guardianData
                    })
                    .then(guardianData => {
                        return setGuardianArticles(guardianData.response.results)
                    })
            } catch (err) {
                console.log('error making api call =>', err)
            }
        }

        makeApiCall();
        getBookmarks();
    }, [])

    useEffect(() => {
        function combineArticles() {                     // combining articles into a single array to be filtered on render
            try {   
                    nytArticles.forEach(article => {
                        article.publisher = 'nyt';
                    });
                    guardianArticles.forEach(article => {
                        article.publisher = 'guardian';
                        article.pub_date = article.webPublicationDate // standardizing pub_date for sorting and rendering in the article component
                    });
                    const joinedArray = [...nytArticles, ...guardianArticles];
                    return setJoinedArticles(joinedArray);
            } catch (err) {
                console.log( 'error setting joined array =>',err)
            }
        } 

        combineArticles();
        console.log(joinedArticles)
    }, [nytArticles])

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
                        addBookmark={addBookmark}
                        bookmarks={bookmarks}
                        joinedArticles={joinedArticles}
                    />
                </Grid.Column>
            </Grid>

        </>
    )
}