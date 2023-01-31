import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import userService from '../../utils/userService';

export default function SignUpPage({handleSignupOrLogin}){
    // set the state to take input from signup form
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConf: '',
    });

    // error handling
    const [error, setError] = useState('');

    // set up navigation functionality after successful account creation
    const navigate = useNavigate();

    async function handleSubmit(form) {
        form.preventDefault(); // stop browser from submitting form because we're using SPA
        try {
            await userService.signup(state) // submits state through signup function; standard JSON submission
            handleSignupOrLogin(); // passed from app.jsx
            navigate('/dashboard'); 
        
        } catch(err){
            console.log(err.message, 'error in signup handleSubmit')
            setError('Check terminal, there was an error signing up')
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
            <h1>Signup Page</h1>
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
                    placeholder='Password'
                    value={state.password}
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    name='passwordConf'
                    placeholder='Confirm Password'
                    value={state.passwordConf}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' className='btn'>
                    Sign Up
                </Button>
                <Link to='/'>Cancel</Link>
                {error ? <ErrorMessage error={error} /> : null}
            </Form>

        </>
        
    );
}
