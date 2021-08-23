FROM node:12-alpine as build

WORKDIR /app
#copy files client to container
COPY . /app/

# prepare for build
RUN yarn --silent
RUN yarn build

# prepare nginx
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build app/build /usr/share/nginx/html 


# start nginx
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]