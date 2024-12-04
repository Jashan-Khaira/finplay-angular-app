# # Stage 1: Build Angular Application
# FROM node:20-alpine AS build

# # Set working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy all project files
# COPY . .

# # Build Angular application in production mode
# RUN npm run build --prod

# # Stage 2: Serve with NGINX
# FROM nginx:latest

# # Remove default NGINX website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy built Angular files to NGINX HTML folder
# COPY --from=build /usr/src/app/dist/finpaly-frontend/browser/ /usr/share/nginx/html/

# # Add custom NGINX configuration to handle SPA routing
# COPY nginx.conf /etc/nginx/nginx.conf

# # Expose port 80 for serving the application
# EXPOSE 80

# # Start NGINX
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:alpine as build-step
# RUN mkdir -p /app
# RUN npm cache clear --force
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build 

# #stage2
# FROM nginx
# COPY --from=build-step /app/dist/finpaly-frontend/browser/ /usr/share/nginx/html

# EXPOSE 80

# STOPSIGNAL SIGTERM

# CMD ["nginx", "-g", "daemon off;"]


# Use an official Node runtime as the base image
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files into the docker image
COPY . .

# Build the Angular application for production
RUN npm run build

# Use nginx to serve the built application
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /usr/src/app/dist/finpaly-frontend/browser/* /usr/share/nginx/html/

# Copy custom nginx configuration (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]