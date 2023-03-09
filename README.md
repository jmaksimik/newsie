# Newsie
### Follow What Matters to You!
## Overview
Newsie is a news aggregation application where users can customize keywords to follow. Customized feed pages will then be avaiable to view all recent stories related to those topics.
The idea came from typical news aggregation services one may encounter, like Apple News. The key value-add is the ability to narrow down by specific topics of interest, rather than general categories (like Sports, News, Foreign Affairs, etc.).
## Signup & Login
<img src='https://imgur.com/n4MMTRm.jpg'>
Signing up is free! You just need to provide your name, email, and a password (otherwise, there wouldn't be a way to save your tags!)
<img src='https://imgur.com/xvL0Wfk.jpg'>
If you're returning to the site, navigate to the Login Screen instead by clicking 'Log In' in the static header.

## Dashboard
<img src='https://imgur.com/qMQ8t49.jpg'>
After signing up and logging in, your default view will be a feed of the top headlines updated to the point of login or refresh. Currently, the site makes calls to the New York Time's API. If you want to follow specific tags, you can enter them into the form to save them as 'tags'. 

## Tag Feed
<img src='https://imgur.com/UhJJ2Kl.jpg'>
After clicking a link, you'll be taken to a page with a news feed specific to your topic. The topics are pulled by taking your keywords as a parameter and plugging them into the API query. 

## Bookmark Page
<img src='https://imgur.com/2dJw9Xe.jpg'>
You might notice that each article has a black bookmark icon at the bottom. If you click it, it will highlight yellow to mark that it's saved. You can navigate to your saved articles by clicking the 'My Bookmarks' button in the header. Here, you can access the article independent of the API (so no worries about losing the article if it's been a few days). You can also 'un-bookmark' articles at any time. If you do so within the Bookmarks Page, the article will disappear (so be careful if you're removing a bookmark from an old article!).

## Profile Page
<img src='https://imgur.com/OvvEHXr.jpg'>
You can edit your personal details here. You can update any piece of information you submitted to create your account. By default, the form doesn't autopopulate your password, but you can change it by entering a new one. The feature is still a WIP.

## Technologies Used
- Javascript
- ReactJS
- HTML5
- CSS
- Semantic UI React
- EJS
- Node.js
- MongoDB
- Express
- Mongoose

## Get Started
- You can view my project planning board on Trello [here](https://trello.com/b/mIstvbAR/newsie). This includes user stories, icebox features, my ERD, and wireframes.
- You can access my app and sign up [here](https://newsie.cyclic.app).

## Next Steps
There is a lot I want to do to continue working on this project:
- Implement additional news APIs like AP and Guardian
- Finish implementing the capability to update your profile information
- Additional styling with Semantic UI React
- Enable an autofill of topics to add when typing in the form to add a tag
- Include the ability to follow companies like tags. On the company's page, include stock ticker information and news stories related to that company. This would involve an API connection with a service like Yahoo Finance.
- Enable custom collections of tags, so one can view feeds of multiple topics at once, if they're related. 
- Enable a reset password feature.





