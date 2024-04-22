FROM alpine:latest

RUN apk update && apk add --no-cache nginx nodejs yarn

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD yarn start

