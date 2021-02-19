
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

create a local file to run mongodb localy
you need docker installed for this to work


filename: 

docker-compose-only-mongo-db.yml

file contents:

```yaml
version: '3'
services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
      
```
To run container execute on command line:

```bash
docker-compose -f docker-compose-only-mongo-db.yml up --build 
```

### Check in the browser

```
http://localhost:3333/api/v1/settings
```

