FROM node:14.17.6-alpine3.14 AS builder
RUN apk add --no-cache make g++ python3
WORKDIR /app
COPY . /app/
RUN npm install && npm run build


FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# COPY nginx-selfsigned.crt /etc/nginx/nginx-selfsigned.crt
# COPY nginx-selfsigned.key /etc/nginx/nginx-selfsigned.key
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]