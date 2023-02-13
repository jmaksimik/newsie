import React from 'react';
import { Grid, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import PageHeader from '../../components/PageHeader/PageHeader';
import Slideshow from '../../components/Slideshow/Slideshow';
import LandingFooter from '../../components/LandingFooter/LandingFooter';



export default function LandingPage({ handleUserState, loggedUser }) {
    return (
        <>
            <PageHeader loggedUser={loggedUser} />
            <Grid
                textAlign='center'
                style={{ height: '100vh', width: '100vw' }}
                verticalAlign='top'
            >
                <Grid.Column>
                    <Slideshow />
                    <Grid.Row>
                        <div className='landing-title' size='huge'>
                            <h1 id='title'>Welcome to Newsie!</h1>
                            <h2>Follow What Matters to You</h2>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <div className='landing-list'>
                            <List bulleted size='huge'>
                                <List.Item>Search Articles Across the Web</List.Item>
                                <List.Item>Customize Topics to Follow</List.Item>
                                <List.Item>Easily Access Your Categories for Future Reference</List.Item>
                                <List.Item>Completely Free to Join!</List.Item>
                            </List>
                        </div>
                        <Link to='/signup'>
                            <Button
                                type='submit'
                                size='massive'
                                primary
                            >
                                Join Today
                            </Button>
                        </Link>
                    </Grid.Row>
                    &nbsp;
                    &nbsp;
                    <Grid.Row>
                        <LandingFooter />
                    </Grid.Row>
                </Grid.Column>
            </Grid>

        </>
    );
}