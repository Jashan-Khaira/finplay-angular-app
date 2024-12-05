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
 
# Expose port 4200
EXPOSE 4200
 
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
