FROM node:18-alpine3.14
COPY . .
ENTRYPOINT yarn --silent start