# Jeans Order Summary

 * Client: React + Redux + Thunk + Oboe (streams)
 * API: Scala + Play + Basic Akka Source stream
 * E2E: Scalatest + Selenium

## Running locally

Requires:

 * Node v6 (recommend using nvm)
 * SBT

To start the Client:

    cd client
    npm install
    npm start

To start the API:

    cd api
    sbt run

To start the End to End tests:

    cd e2e
    sbt test


## Assumptions:
 - Year of 2016 sales only
 - Male and Female genders only


## TODO

 * Global summary
