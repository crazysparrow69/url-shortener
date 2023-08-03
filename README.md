## Description

This is a URL shortener API. You can create short URLs by sending request to POST /shortlink endpoint
```
{
  full: "http://example.com"
}
```
and getting response
```
{
  _id: "someid",
  short: "somerandomhash",
  full: "http://example.com",
  __v: 0
}
```
After that, you can access short url by typing in the browser your base domain (where the server is working) and adding short random hash u got from the response, split by a "/".
Example of a short URL: http://localhost:5000/Uy89mJMcQ

## Installation

```bash
$ npm install
```

## Running the app
Firstly, you should configure .env file, adding a field DATABASE_URI with your MongoDB database URI.
Then:

```bash
$ npm run start:dev
