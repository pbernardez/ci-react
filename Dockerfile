FROM node:18.16-alpine AS builder

ARG env

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.25-alpine-slim
RUN apk upgrade libssl3 libcrypto3 
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80/tcp
