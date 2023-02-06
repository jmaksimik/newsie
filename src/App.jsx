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

  function handleUserState() {
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

  async function getBookmarks() {
    try {
      const response = await bookmarkApi.getAll();
      console.log(response.data, '<-- bookmarks response before setting to state');
      setBookmark(response.data)
    } catch(err) {
      console.log(err.message, 'error in fetching bookmarks')
    }
  }

  async function removeBookmark(bookmarkId) {
    try {
      const response = await bookmarkApi.deleteBookmark(bookmarkId);
      console.log(response, 'response from bookmarks API');
      getBookmarks();
    } catch (err) {
      console.log(err.message, '<- issue with removing bookmark')
    }
  }





  if (user) {
    return (
      <Routes>
        <Route path='/dashboard' element={<DashboardPage 
                                              handleLogout={handleLogout} 
                                              loggedUser={user} 
                                              addBookmark={addBookmark}
                                              bookmarks={bookmarks}
                                              getBookmarks={getBookmarks}
                                              removeBookmark={removeBookmark}
                                              />} />
        <Route path='/profile' element={<ProfilePage loggedUser={user} handleLogout={handleLogout} bookmarks={bookmarks} handleUserState={handleUserState} />} />
        <Route path='/bookmarks' element={<BookmarkPage loggedUser={user} handleLogout={handleLogout} bookmarks={bookmarks} getBookmarks={getBookmarks} removeBookmark={removeBookmark} />} />
        <Route path='/tag/:tagName' element={<TagPage 
                                              loggedUser={user} 
                                              handleLogout={handleLogout} 
                                              liftApiKeywords={liftApiKeywords} 
                                              bookmarkStatus={bookmarkStatus}
                                              addBookmark={addBookmark}
                                              bookmarkExists={bookmarkExists}
                                              bookmarks={bookmarks}
                                              getBookmarks={getBookmarks}
                                              removeBookmark={removeBookmark}
                                              
                                              />} 
          />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
      );
    }
      return (
        <Routes>
        <Route path='/' element={<LandingPage loggedUser={user} handleUserState={handleUserState} />} />
        <Route path='/login' element={<LoginPage handleUserState={handleUserState} loggedUser={user} />} />
        <Route path='/signup' element={<SignUpPage handleUserState={handleUserState} loggedUser={user} />} />
        
        
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      );
}

