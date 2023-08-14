FROM nginx:1.25-alpine-slim
RUN apk upgrade libssl3 libcrypto3 
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html

EXPOSE 80/tcp
