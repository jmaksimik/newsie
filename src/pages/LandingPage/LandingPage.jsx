import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function LandingPage({ handleUserState, loggedUser }) {
    return (
        <>
            <PageHeader loggedUser={loggedUser} />
            <h1>Landing Page</h1>
        </>
    );
}