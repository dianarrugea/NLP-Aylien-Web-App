# NATURAL LANGUAGE PROCESSING (NLP) WEB TOOL

A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Skills gained:

* Setting up Webpack
* Sass styles
* Webpack Loaders and Plugins
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external URLs

## Technologies used:
* HTML
* CSS
* SASS
* JavaScript
* Express, Node.JS built in Webpack
* Jest

### NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. 

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

### Getting started

Clone this repository, `cd` into your new folder and run:

- `npm install`

### Setting up the API

The Aylien API is perhaps different. It will install a node module to run certain commands through, it will simplify the requests from our node/express backend.

### Step 1: Signup for an API key
First, click [here](https://developer.aylien.com/signup). to sign up and get an API key. The API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Install the SDK
SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. This project is using the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks).

### Step 3: Require the SDK package
* Install the SDK in the project and then it will be ready to set up the server/index.js file.

* The server index.js file must have these things:

* Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

### Step 4: Environment Variables
* Next the API keys need to be declared:

```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```
* Because the personal API keys get put into a file, and when pushed, this file is going to be available PUBLICLY on Github. In order for this not to happen, is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

* Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow the use environment variables we set in a new file
* Create a new ```.env``` file in the root of the project
* Go to your .gitignore file and add ```.env``` . This will make sure that the our environment variables are not pushed to Github! 
* Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
* Add this code to the very top of the server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
* Reference variables created in the .env file by putting ```process.env``` in front of it, an example might look like this:

```
console.log(`Your API key is ${process.env.API_KEY}`);
```
* This means that our updated API credential settings will look like this:

```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary. 
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
```

### Step 5: Using the API

The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints) however using the SDK simplifies the requests we need to make. 


### Run the project in production mode:
##### Add the below comand in your terminal:

* npm run build-prod 

### Run the project in development mode:
##### Add the below comand in your terminal:

* npm run build-dev

### Start the sever:
##### Add the below comand in your terminal:

* npm start

### Run the testing with JEST 
#### Add the below comand in your terminal:

* npm run test

## Author
### Diana Rugea


