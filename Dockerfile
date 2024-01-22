# Stage 1: Build Stage
FROM node:16.17.0-alpine as builder

WORKDIR /app
COPY . /app/

# Add debugging logs
# RUN ls -al
RUN npm install && npm run build

# # Stage 2: Production Stage
# FROM nginx:alpine

# # Copy custom Nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

# WORKDIR /usr/share/nginx
# COPY --from=builder /app/build /usr/share/nginx

# # CMD instruction for Nginx
CMD ["nginx", "-g", "daemon off;"]


