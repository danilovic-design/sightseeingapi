# SightSeeingAPI

A NodeJS based API, created with Typescript and ExpressJS framework.

### Usage (endpoints)

#### GET /

Gives back a "Server hello" JSON message. Used for testing purposes.

#### GET /all

Gives back all the data stored in the database.

#### GET /search?\[city=<city>\]&\[country=<country>\]&\[type=<type>\]&\[description=<description>\]

This endpoint helps filtering the search results.

#### DELETE /deletebyid

This endpoint can be used only with a special API key, thus the endpoint is not publicly available.

#### POST /add

This endpoint can be used only with a special API key, thus the endpoint is not publicly available.
