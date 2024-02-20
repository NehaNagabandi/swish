FROM node:16.17.0-alpine as builder
WORKDIR /app
COPY . /app/
RUN npm install && npm run build
CMD ["npm", "run", "start"]


