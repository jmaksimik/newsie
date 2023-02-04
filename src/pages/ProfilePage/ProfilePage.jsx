import React, {useState, useEffect} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {Link, useNavigate} from 'react-router-dom'

import tokenService from '../../utils/tokenService';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function ProfilePage({loggedUser, handleLogout}){
    const [state, setState] = useState({
        firstName: loggedUser.firstName,
        lastName: loggedUser.lastName,
        email: loggedUser.email,
        password: loggedUser.password,
        passwordConf: ''
    })
    function handleSubmit(e) {
        return;
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
            <h1>Profile Page</h1>
            <Form autoComplete='off' onSubmit={handleSubmit}>
                <Form.Input
                    name='firstName'
                    placeholder='First Name'
                    value={state.firstName}
                    onChange={handleChange}
                    required
                />
                <Form.Input 
                    name='lastName'
                    placeholder='Last Name'
                    value={state.lastName}
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    name='email'
                    placeholder='Email'
                    value={state.email}
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    name='password'
                    placeholder='Update Password'
                    type='password'
                    value={state.password}
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    name='passwordConf'
                    placeholder='Confirm Password Change'
                    type='password'
                    value={state.passwordConf}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' className='btn'>
                    Save
                </Button>
                <Link to='/dashboard'>Cancel</Link>
            </Form>
            
        </>
    );
}

