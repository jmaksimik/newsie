import {Link} from 'react-router-dom';
import {Header, Segment, Image, Icon} from 'semantic-ui-react';

export default function PageHeader({handleLogout, loggedUser}) {
            if (loggedUser) {
                return (
                    <Segment clearing>
                        <Header as='h2' floated='right'>
                            <Link to='' onClick={handleLogout}>
                                Logout
                            </Link>
                        </Header>
                    </Segment>
                );
            }
            return (
                <Segment clearing>
                    <Header as='h2' floated='right'>
                        <Link to='/login'>
                            Login
                        </Link>
                    </Header>
                </Segment>
            );
}