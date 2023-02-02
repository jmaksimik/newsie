import { Link } from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';

export default function PageHeader({ handleLogout, loggedUser, handleSignupOrLogin }) {
    if (loggedUser) {
        return (
            <Segment clearing>
                <Header as='h3' floated='right'>
                    <Link to='/dashboard'>
                        Dashboard
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to='/bookmarks'>
                        My Bookmarks
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to='/profile'>
                        My Profile
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to='' onClick={handleLogout}>
                        Logout
                    </Link>
                </Header>
                <Header as='h2' floated='left'>
                    <Link to='/dashboard'>
                        <Icon name='newspaper outline'></Icon>
                    </Link>
                    <span>Newsie</span>
                </Header>
            </Segment>
        );
    }
    return (
        <Segment clearing>
            <Header as='h2' floated='right'>
                <Link to='/login'>
                    Log In
                </Link>
                &nbsp;
                &nbsp;
                <Link to='/signup'>
                    Sign Up
                </Link>
            </Header>
            <Header as='h2' floated='left'>
                <Icon name='newspaper outline'></Icon>
                <span>Newsie</span>
            </Header>
        </Segment>
    );
}