## Hangman Game

### Introduction

This is a web app of a popular paper and pencil guessing game called Hangman. Player tries to guess a word by selecting letters within a certain number of guesses. In this app computer will choose a random word and the player will win if he/she can guess the correct word within limited number of tries. Otherwise, the player will hang from tree!

#### Stack

- React.js
- Node.js
- Nest.js
- Postgres
- Docker
- TypeScript

### Prerequisites

Make sure you have the below package installed on your machine.

- Docker
- Docker-Compose
- Nodejs

### Quick start

Clone this repo to your local machine

```
git clone https://github.com/km-mahbub/hangman.git
```

Before running the container, please install dependencies locally first.
For that run the following command

```bash
# install server dependencies

cd server && yarn

# instal client dependencies

cd ../client && yarn
```

To start the container in development mode, run the following command

```bash
cd ../ && sudo docker-compose --file docker-compose-dev.yml up
```

it will be served on `http://localhost:3000`

### Production

To start the container in development mode, run the following command from project root folder.

```bash
sudo docker-compose up -d
```

This will create build for both server and client, will serve client with nginx server on port 80 (`http://localhost`) and client will communicate with server on port 5500 in the location /api.
