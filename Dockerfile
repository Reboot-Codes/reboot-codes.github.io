FROM nginx:alpine

RUN apk update && apk add --no-cache nginx nodejs yarn

WORKDIR /app

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN yarn

RUN yarn build

RUN yarn export

