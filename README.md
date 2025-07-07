# Cooking Challeng - Backend

## Tech Stack
 - NestJS
 - Typescript


## Setup

```bash
$ npm i
```

### Environment Variables

All of the environment variables should be set on a `.env` file. You can use `.env.example` as the base to it.

```bash
$ cp .env.example .env
```

And now set the variables accordingly to your environment.


### Database

This project relies on a Postgres database and server you should set on `.env`file.
You can setup that Postgres server by yourself, or you can use the `dbcompose.yml` to start a Postgres server using Docker Compose and the `.env` file.
In the case you decide to use `dbcompose.yml`, don't forget to set in it where Postgres data will be saved on the host machine.

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## About the project

You can [follow here](https://tree.taiga.io/project/reniedev-cook-challenge/timeline) the development of the project in details like the tasks on the backlog and what is being done at the moment.
