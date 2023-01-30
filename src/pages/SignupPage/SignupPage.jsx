import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
            await userService.signup(form) // submits form through signup function; standard JSON submission
            handleSignupOrLogin(); // passed from app.jsx
            navigate('/dashboard'); 
        
        } catch(err){
            console.log(err.message, 'error in signup handleSubmit')
            setError('Check terminal, there was an error signing up')
        }
    }

    return (
        <h1>Signup Page</h1>
    );
}
