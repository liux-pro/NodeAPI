FROM node:alpine
EXPOSE 80
COPY . .
ENTRYPOINT ["node","bin/www"]
