import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import './LoginPage.css';

import userService from '../../utils/userService';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';


export default function LoginPage({handleSignupOrLogin}){
    const [error, setError] = useState('');
    const [state, setState] = useState({
      email: '',
      password: '',
    })
    const navigate = useNavigate();

    function handleChange(e) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
    }

    async function handleSubmit(e) {
      e.preventDefault();

      try {
        await userService.login(state);
        handleSignupOrLogin();
        navigate('/dashboard')

      } catch(err) {
        setError(err.message)
      }
    }

    return (
      <>
        <div>Login Pageeeeee</div>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type='email'
              name='email'
              placeholder='Email'
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input 
              type='password'
              name='password'
              placeholder='Password'
              value={state.password}
              onChange={handleChange}
              required
            />
            <Button
              color='green'
              fluid
              size='large'
              type='submit'
              className='btn'
              >
                Login
              </Button>
          </Segment>
        </Form>
        {error ? <ErrorMessage error={error} /> : null}
      </>
      );
}

