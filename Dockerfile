
FROM node:12.16.1-alpine As builder

WORKDIR /app

COPY package.json .

RUN npm i -g

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html