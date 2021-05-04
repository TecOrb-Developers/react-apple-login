# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Apple login
## Step-1 firstly go for developer account
https://developer.apple.com/account/#/overview/TG25L453P5
## Step-2  Setting Up Developer Portal:

First, sign in to the Apple Developer Portal and enroll if you have not already, and then click on Certificates, Identifiers and Profiles

## Step-3 Setting up App ID, Register a new identifier and select App Ids, Select option "Signin with apple"

From the sidebar, choose Identifiers then click the blue plus icon.

## Step-4 Create Service Id for web application 
1-Now Go ahead and create a new identifier and choose Services IDs.<br /> 
2-then register service Id.<br /> 
3-Web Authentication Configuration.<br /> 
4-is service Id Make sure to also check the Sign In with Apple checkbox.<br /> 
5-click the Configure button next to Sign In with Apple in this step. This is where you’ll define the domain your app is running on, as well as define the redirect URLs used during the OAuth flow.<br /> 
6-  Apple doesn’t allow localhost URLs in this step. You have to use a real domain here or use.<br /> 


## Step-5 Create Key

1- Click the blue plus icon to register a new key. Give your key a name, and check the Sign In with Apple checkbox.
2-  Click the Configure button and select the primary App ID you created earlier.
then download the key 
3-Apple will generate a new private key for you and let you download it only once. Make sure you save this file because you won’t be able to get it back again later. Then, press Done.

## Step-6 Now Setting the Reactjs Project

1- The first thing you need to do is add the apple script. We use scriptjs for that.


