#stage1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
<<<<<<< HEAD
RUN npm run build --prod
=======
RUN ng build --prod

>>>>>>> 1ef54dafb1f8d706d0d49773fe30f1d97d95bb23

#stage2
From nginx:1.17.1-alpine
COPY --from=build-step /app/dist/* /usr/share/nginx/html