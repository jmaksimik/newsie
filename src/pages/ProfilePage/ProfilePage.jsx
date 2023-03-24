import React, { useState, useEffect } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom'

import userService from '../../utils/userService';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function ProfilePage({ loggedUser, handleLogout, handleUserState }) {
    const [state, setState] = useState({
        firstName: loggedUser.firstName,
        lastName: loggedUser.lastName,
        email: loggedUser.email,
        password: loggedUser.password,
        passwordConf: loggedUser.password
    })

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (state.password == state.passwordConf){
                userService.updateUser(state);
                navigate('/profile')
            } else {
                throw new Error("Passwords don't match!")
            }
        } catch (err) {
            console.log(err, 'error in updating profile')
        }

    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
            <Grid 
                textAlign='center'
                style={{height: '100vh', width: '100vw'}}
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <h1>Edit My Details</h1>
                    <Form autoComplete='off' onSubmit={handleSubmit}>
                        <Form.Input
                            name='firstName'
                            placeholder='First Name'
                            value={state.firstName}
                            onChange={handleChange}

                        />
                        <Form.Input
                            name='lastName'
                            placeholder='Last Name'
                            value={state.lastName}
                            onChange={handleChange}

                        />
                        <Form.Input
                            name='email'
                            placeholder='Email'
                            value={state.email}
                            onChange={handleChange}
                        />
                        <Form.Input
                            name='password'
                            placeholder='Update Password'
                            type='password'
                            value={state.password}
                            onChange={handleChange}
                            default=''

                        />
                        <Form.Input
                            name='passwordConf'
                            placeholder='Confirm Password Change'
                            type='password'
                            value={state.passwordConf}
                            onChange={handleChange}
                            default=''
                        />
                        <Button type='submit' className='btn'>
                            Save
                        </Button>
                        <Link to='/dashboard'>Cancel</Link>
                    </Form>

                </Grid.Column>
            </Grid>

        </>
    );
}

