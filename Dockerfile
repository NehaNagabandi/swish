FROM node:16.17.0-alpine
WORKDIR /app
COPY . /app/
RUN npm install && npm run build
CMD ["npm","start"]

FROM nginx:alpine
WORKDIR /usr/share/nginx
COPY --from=builder /app/dist/apps/ /usr/share/nginx
COPY --from=builder /app/package-lock.json /usr/share/nginx