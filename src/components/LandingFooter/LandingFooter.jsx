import React from 'react';
import {Segment, Header} from 'semantic-ui-react'

export default function LandingFooter() {
    return (
        <Segment inverted style={{padding: '5em 0em'}}>
            <Header as='h4' floated='right'>
                © 2023 Newsie. All Rights Reserved.
            </Header>
        </Segment>
    )
}