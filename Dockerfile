
#stage1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm uninstall popper.js && npm i @popperjs/core
RUN npm install -f
COPY . /app
RUN npm run build --prod

#stage2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/* /usr/share/nginx/html