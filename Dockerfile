# Use Node.js 20 for compatibility with react-router-dom@7.2.0
FROM node:20 AS build

WORKDIR /app

# Copy package.json and yarn.lock first (for caching dependencies)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire project
COPY . .

# Build the React app
RUN yarn build

# Use Nginx to serve the built React app
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

