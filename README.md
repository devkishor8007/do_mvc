# do_mvc
REST API with MVC pattern using Node.js, Express.js, MongoDB [Backend Server] as Handling the errors.

## Installation

Before clone the repo, you must have node.js on your device.

    $ git clone https://github.com/devkishor8007/do_mvc.git

## Remember to install all the dependencies...

    $ npm install
    
## Create the .env file
       PORT = 5000
       MONGO = mongodb-url

## Usage

    $ node server.js
#

#### Check the endpoint with in the Postman API
### Getting all data from database
       GET /api/v1/data
### Getting all data from database with SELECT and SORT query
       GET /api/v1/data?select=name&sort=name 
### Getting all data from database with SELECT query
       GET /api/v1/data?select=name
### Getting all data from database with SORT query
       GET /api/v1/data?sort=-name
### Get a Single data by ID
       GET /api/v1/data/:id
### Create a new data to database
       POST /api/v1/data 
### Update a single data in database by ID
       PUT /api/v1/data/:id 
### Delete a data from database by ID
       DELETE /api/v1/data/:id
       
#
       
## Resources   
[Nodejs Docs](https://nodejs.org/en/docs/)
    
[Expressjs Docs](https://expressjs.com/en/guide/writing-middleware.html)
    
[MongoDB Docs](https://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)

[MVC-Architecture Docs](https://www.geeksforgeeks.org/model-view-controllermvc-architecture-for-node-applications/)
