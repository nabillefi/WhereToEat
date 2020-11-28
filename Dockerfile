#stage1
FROM node:latest as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g
RUN node_modules/.bin/ng build --prod
COPY . /app 

#stage2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/* /usr/share/nginx/html