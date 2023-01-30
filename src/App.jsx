import {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignupPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import LandingPage from './pages/LandingPage/LandingPage';

import userService from './utils/userService';

export default function App() {
  const [user, setUser] = useState(userService.getUser()) // tries to grab a token if one exists

  function handleSignupOrLogin() {
    console.log('signup/login handler running');
    setUser(userService.getUser()); // gets JWT from localstorage and decodes it
  }


  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' 
             element={<SignUpPage handleSignupOrLogin={handleSignupOrLogin}/>}
       />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/bookmarks' element={<BookmarkPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

