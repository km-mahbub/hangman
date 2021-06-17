FROM node:12-alpine as build
WORKDIR /app
COPY . /app/

# prepare for build
RUN yarn --silent
RUN yarn build

# move build to new container
FROM node:12-alpine
WORKDIR /app

COPY --from=build /app/build /app/
COPY package.json /app/package.json

RUN yarn --silent
RUN apk add --no-cache bash

# expose port 5500
EXPOSE 5500 