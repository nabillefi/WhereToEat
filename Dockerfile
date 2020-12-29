FROM trion/ng-cli as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci  --debug
COPY . .
RUN ng build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html


CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
