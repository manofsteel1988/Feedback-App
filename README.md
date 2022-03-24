# Feedback App
 The app allows users to add, update and delete feedback. It uses a mock REST api with json-server.
 
## How to run the app
1. Either fork or download the app and open the folder in the cli.
2. Install all dependencies using 'npm i' command.
3. Start the web server using 'npm run dev'. This will run JSON-server on port :5000 and React on port at http://localhost:3000/
4. Go to http://localhost:3000/ in your browser and start giving feedbacks.

## How to give a feedback
1. Select a rating between 1 and 10.
2. Write a feedback with at list 10 characters.
3. Submit the feedback by clicking on the button.

## User Stories
- A user can add a feedback.
- A user can update a feedback.
- A user can delete a feedback.
- A user can navigate between the homepage and the about page.

## Features
- Feedback
  - feedback is stored on a mock database.
  - feedback is displayed on the homepage.
  
- Rating a feedback
  - ratings are stored on a mock database.

- Updating/deleting a feedback
  - updates are send to the mmock database

- Average rating of feedbacks
  - average of ratings is displayed on the homepage.

- Navigation
  - a link is created to navigate between the homepage and the about page.

- Reviews
  - the number of reviews is displayed on the homepage.

## Future features
- Accounts, login/signup with a personal account.
- Add a profile image with the feedback.

## Dependencies
- json-server
- prop-types
- react
- react-router-dom
- react-icons
- uuid
- concurrently
- framer-motion

## What the app looks like



