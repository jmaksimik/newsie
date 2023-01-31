import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function LandingPage({ handleSignupOrLogin, loggedUser }) {
    return (
        <>
            <PageHeader loggedUser={loggedUser} handleSignupOrLogin={handleSignupOrLogin} />
            <h1>Landing Page</h1>
        </>
    );
}