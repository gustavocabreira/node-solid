# NodeJS project using SOLID principles

- It was also applied the `Package by Feature` project structure - everything related to the feature is placed in the same directory.

# TODO

- Unit tests;

# Setup

    Run `docker-compose up` to start the container
    
# API

### Create new user

`POST /users/`

    curl -i -H 'Accept: application/json' -d 'name=Gustavo&email=gustavo.softdev@gmail.com&password=123456' http://localhost:3333/users

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

