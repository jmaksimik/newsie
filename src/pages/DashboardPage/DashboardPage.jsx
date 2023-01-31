import React, {useState, useEffect} from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function DashboardPage({handleLogout, loggedUser}){
    return (
        <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        <h1>Dashboard Page</h1>
        </>
    )
}