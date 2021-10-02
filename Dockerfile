FROM node:alpine
EXPOSE 80
COPY . .
RUN npm install
ENTRYPOINT ["node","bin/www"]
