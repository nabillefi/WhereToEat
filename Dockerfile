#stage1
FROM node:latest as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g
COPY . /app
RUN ng build 


#stage2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/* /usr/share/nginx/html