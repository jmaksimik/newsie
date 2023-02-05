import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function LandingPage({ handleUserState, loggedUser }) {
    return (
        <>
            <PageHeader loggedUser={loggedUser} />
            <div class='ui inverted vertical masthead center aligned segment'>
                <div class='ui text container'>
                    <h1>Welcome to Newsie!</h1>
                    <h2>Follow What Matters to You</h2>
                </div>

            </div>

        </>
    );
}