import {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignupPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import LandingPage from './pages/LandingPage/LandingPage';
import TagPage from './pages/TagPage/TagPage';

import userService from './utils/userService';
import * as bookmarkApi from './utils/bookmarkApi';

export default function App() {
  const [user, setUser] = useState(userService.getUser()) // tries to grab a token if one exists
  const [apiKeywords, setApiKeywords] = useState('')
  const [bookmarks, setBookmark] = useState([])
  const [bookmarkStatus, setBookmarkStatus] = useState(false)
  

  const bookmarkExists = false
  
  
  function liftApiKeywords(keywords){
    setApiKeywords(keywords);
  }

  function handleSignupOrLogin() {
    console.log('signup/login handler running');
    setUser(userService.getUser()); // gets JWT from localstorage and decodes it
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
    console.log('logout successful');
  }

  async function addBookmark(bookmark) {
    try {
      const response = await bookmarkApi.create(bookmark);
      console.log(response);
      setBookmark([...bookmarks, response.bookmark]);

    } catch(err) {
      console.log(bookmarkApi)
      console.log(err)
    }

  }


  if (user) {
    return (
      <Routes>
        <Route path='/dashboard' element={<DashboardPage handleLogout={handleLogout} loggedUser={user} />} />
        <Route path='/profile' element={<ProfilePage loggedUser={user} handleLogout={handleLogout} />} />
        <Route path='/bookmarks' element={<BookmarkPage loggedUser={user} handleLogout={handleLogout} />} />
        <Route path='/tag/:tagName' element={<TagPage 
                                              loggedUser={user} 
                                              handleLogout={handleLogout} 
                                              liftApiKeywords={liftApiKeywords} 
                                              bookmarkStatus={bookmarkStatus}
                                              addBookmark={addBookmark}
                                              bookmarkExists={bookmarkExists}
                                              bookmarks={bookmarks}
                                              
                                              />} 
          />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
      );
    }
      return (
        <Routes>
        <Route path='/' element={<LandingPage loggedUser={user} handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/login' element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/signup' element={<SignUpPage handleSignupOrLogin={handleSignupOrLogin} />} />
        
        
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      );
}

